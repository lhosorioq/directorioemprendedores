import React from 'react';
import LoginComp from '../components/LoginComp';
import Axios from 'axios';
import Swal from 'sweetalert2';

function LoginAdminView() {

    const loginAdmin = async (data) => {
        const admin = { user: data.email, password: data.password};
        await Axios.post('/admin/login', admin)
            .then((respuesta) => {
                const auth = respuesta.data.auth;
                if (!auth) {
                    Swal.fire({
                        icon: 'error',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    const token = respuesta.data.token;
                    const id = respuesta.data.id;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('id', id);

                    Swal.fire({
                        icon: 'success',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    window.location.href = '/admin/data';
                }
            })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <>
            <LoginComp
                tittle="Login Administrador"
                login={loginAdmin}
                registro="none"
            />
        </>
    );
}

export default LoginAdminView;
