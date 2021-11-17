import React from 'react'
import LoginComp from '../components/LoginComp';
import Axios from 'axios';
import Swal from 'sweetalert2';

function LoginEmprendedorView() {

    const loginEmprendedor = async (data) => {
        const emprendedor = { mail: data.email, password: data.password };
        await Axios.post('emprendedor/login', emprendedor)
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
                    const id = respuesta.data.emprendedor._id;
                    const nombre = respuesta.data.emprendedor.nombre;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('id', id);
                    sessionStorage.setItem('nombre', nombre)
                    window.location.href = '/emprendedor'; //pendiente ruta de pagina a la que pasara despues de login

                    Swal.fire({
                        icon: 'success',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <>
            <LoginComp tittle="Login Emprendedor" login={loginEmprendedor} registro='block' />
        </>
    );
}

export default LoginEmprendedorView
