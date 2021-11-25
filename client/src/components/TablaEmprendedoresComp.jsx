import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Table, Button, Modal, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import DataEmprendedorComp from './DataEmprendedorComp';

function TablaEmprendedoresComp() {
    const [emprendedores, setEmprendedores] = useState(null);
    const usuarioEditar = useRef({});
    const visible = useRef(false);
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
        'Ciudad',
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

    const carga = async (id) => {

        const data = new FormData();
        data.append('img', '');
        data.append('nombre', '');
        data.append('telefono', '');
        data.append('mail', '');
        data.append('password', '');
        data.append('actividad', '');
        data.append('direccion', '');
        data.append('msg_description', '');
        data.append('departamento', '');
        data.append('ciudad', '');
        data.append('visible', visible.current);

        const token = 'Bearer ' + sessionStorage.getItem('token');

        await Axios.put(`/admin/updateemprendedor/${id}`, data, {
            headers: { Authorization: token },
        })
            .then((response) => {
                const auth = response.data.auth;
                if (!auth) {
                    Swal.fire({
                        icon: 'error',
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: response.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    loadEmprendedores(params);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const cambiarVisible = (id, v) => {
        visible.current = !v;
        console.log(visible.current)
        carga(id);
    };

    const deleteEmprendedor = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        const id = usuarioEditar.current._id;
        await Axios.delete(`/admin/deleteemprendedor/${id}`, {
            headers: { Authorization: token },
        })
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
                                    <td>{emprendedor.ciudad} </td>
                                    <td>
                                        <Row>
                                            <i
                                                as="button"
                                                style={{
                                                    cursor: 'pointer',
                                                }}
                                                className="fas fa-check-circle"
                                                onClick={() =>
                                                    cambiarVisible(
                                                        emprendedor._id,
                                                        emprendedor.visible
                                                    )
                                                }
                                            ></i>

                                            <Col>
                                                {emprendedor.visible
                                                    ? 'Si'
                                                    : 'No'}
                                            </Col>
                                        </Row>
                                    </td>
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
                <Modal
                    size="lg"
                    show={show2}
                    onHide={handleClose}
                    style={{ height: '600px' }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Emprendedor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DataEmprendedorComp
                            emprendedor={usuarioEditar.current}
                            loadEmprendedor={() => loadEmprendedores(params)}
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }

    return <h1>No hay contenido</h1>;
}

export default TablaEmprendedoresComp;
