import React from 'react';
import LoginComp from '../components/LoginComp';
import Axios from 'axios';
import Swal from 'sweetalert2';
import Title from '../components/Title';
import { Container } from 'react-bootstrap';

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
                    const rol = respuesta.data.rol;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('id', id);
                    sessionStorage.setItem('rol', rol);

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
        <Container>
            <Title title={'Login Administrador'} span={'Login Administrador'} />
            <LoginComp
                tittle="Login Administrador"
                login={loginAdmin}
                registro="none"
            />
        </Container>
    );
}

export default LoginAdminView;
