import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Table, Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import SignupComp from './UpdateEmprendedorComp';

function TablaEmprendedoresComp() {
    const [emprendedores, setEmprendedores] = useState(null);
    const usuarioEditar = useRef({});
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const params = {
        actividad: '',
        departamento: '',
        ciudad: '',
        nombre: '',
    };

    const cabezeras = [
        'Nombre',
        'Email',
        'Actividad',
        'Telefono',
        'Direccion',
        'Ciudad',
        'Departamento',
        'visible',
    ];

    const handleClose = () => {
        setShow(false);
        setShow2(false);
    };

    const handleShow = (item) => {
        usuarioEditar.current = item;
        setShow(true);
    };

    const handleShow2 = (item) => {
        usuarioEditar.current = item;
        setShow2(true);
    };

    const alerta = (mensaje, icon) => {
        Swal.fire({
            icon: icon,
            title: mensaje,
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const loadEmprendedores = async (param) => {
        await Axios.post('/user/filter/', param)
            .then((response) => {
                setEmprendedores(response.data.emprendedores);
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedores;
    };

    const deleteEmprendedor = async () => {
        const id = usuarioEditar.current._id;
        await Axios.delete(`/admin/deleteemprendedor/${id}`)
            .then((response) => {
                alerta(response.data.mensaje, 'success');
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedores;
    };

    useEffect(() => {
        if (!emprendedores) {
            loadEmprendedores(params);
        }
    });

    if (emprendedores) {
        return (
            <>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            {cabezeras.map((tittle, index) => (
                                <th key={index}>{tittle}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {emprendedores.map((emprendedor, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1} </td>
                                    <td> {emprendedor.nombre} </td>
                                    <td> {emprendedor.mail} </td>
                                    <td>{emprendedor.actividad} </td>
                                    <td>{emprendedor.telefono} </td>
                                    <td>{emprendedor.direccion} </td>
                                    <td>{emprendedor.ciudad} </td>
                                    <td>{emprendedor.departamento} </td>
                                    <td>{emprendedor.visible ? 'Si' : 'No'}</td>
                                    <td>
                                        <Button
                                            className="m-1"
                                            variant="outline-success"
                                            onClick={() =>
                                                handleShow2(emprendedor)
                                            }
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="m-1"
                                            variant="outline-danger"
                                            onClick={() =>
                                                handleShow(emprendedor)
                                            }
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                {/* Eliminar */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Emprendedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Esta seguro que desea eliminar el Emprendedor{' '}
                        {usuarioEditar.current.nombre}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="danger"
                            onClick={() => deleteEmprendedor()}
                        >
                            Eliminar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Editar */}
                <Modal size="lg" show={show2} onHide={handleClose} style={{height: '600px'}} >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Emprendedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SignupComp item={usuarioEditar.current} />
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    return <h1>No hay contenido</h1>;
}

export default TablaEmprendedoresComp;
