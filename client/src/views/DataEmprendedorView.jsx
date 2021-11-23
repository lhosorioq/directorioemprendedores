import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Card, Col, Container, Row, ProgressBar,} from 'react-bootstrap';
import HeaderComp from '../components/HeaderComp';
import DataEmprendedorComp from '../components/DataEmprendedorComp';
import Title from '../components/Title';
import Swal from 'sweetalert2';

function DataEmprendedorView() {
    const [emprendedor, setEmprendedor] = useState(null);
    const id = sessionStorage.getItem('id');
    const [url, setUrl] = useState(`http://localhost:4000/emprendedor/imagen/${id}`);

    const reload = () => {
        // window.location.reload() // Esto con el fin de que se actualice la imagen cunado es cambiada buscar otro metodo 
        url === `http://localhost:4000/emprendedor/imagen/${id}`
            ? setUrl(`http://localhost:4000/user/${id}`)
            : setUrl(`http://localhost:4000/emprendedor/imagen/${id}`);
    };

    const cambiar = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.get(`/emprendedor/find/${id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                setEmprendedor(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
        return emprendedor;
    };

    const loadEmprendedor = async () => {
        if (!emprendedor) {
            const token = 'Bearer ' + sessionStorage.getItem('token');
            await Axios.get(`/emprendedor/find/${id}`, {
                headers: { Authorization: token },
            })
                .then((response) => {
                    setEmprendedor(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
            return emprendedor;
        }
    };

    const eliminar = async () => {
        const token = 'Bearer ' + sessionStorage.getItem('token');
        await Axios.delete(`/emprendedor/delete/${id}`, {
            headers: { Authorization: token },
        })
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: response.data.mensaje,
                    showConfirmButton: false,
                    timer: 1500,
                });
                sessionStorage.clear()
                window.location.href= '/'
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        loadEmprendedor();
    });

    if (emprendedor) {
        return (
            <>
                <HeaderComp />
                <Container>
                    <Row>
                        <Title
                            title={'Datos Emprendedor'}
                            span={'Datos Emprendedor'}
                        />
                    </Row>
                    <Row style={{ marginTop: '100px' }}>
                        <Col>
                            <Card
                                className="mb-4 shadow p-3 mb-5 bg-white rounded"
                                style={{ width: '25rem' }}
                            >
                                <Card.Img variant="top" src={url} />
                                <Card.Body>
                                    <Card.Title>
                                        {' '}
                                        {emprendedor.nombre}{' '}
                                    </Card.Title>
                                    <Card.Text>
                                        {' '}
                                        {emprendedor.msg_description}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Servicio: {emprendedor.actividad}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Direccion: {emprendedor.direccion}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Telefono: {emprendedor.telefono}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Ciudad: {emprendedor.ciudad}{' '}
                                    </Card.Text>
                                    <Card.Text>
                                        {' '}
                                        Departamento: {
                                            emprendedor.departamento
                                        }{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <DataEmprendedorComp
                                emprendedor={emprendedor}
                                loadEmprendedor={() => cambiar()}
                                url={() => reload()}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            md={{ span: 2, offset: 10 }}
                            className="d-grid gap-2"
                            style={{ marginBottom: '50px' }}
                        >
                            <i className="fas fa-user-slash" onClick= {() => eliminar()}>{' '}Eliminar Cuenta</i>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    return (
        <div className="container" style={{ height: '500px' }}>
            <ProgressBar animated now={45} />
        </div>
    );
}

export default DataEmprendedorView;
