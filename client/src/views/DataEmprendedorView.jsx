import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, Col, Container, Row, ProgressBar } from 'react-bootstrap';
import HeaderComp from '../components/HeaderComp';

function DataEmprendedorView() {
    const [emprendedor, setEmprendedor] = useState(null);
    const id = sessionStorage.getItem('id');

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

    useEffect(() => {
        loadEmprendedor();
    });

    if (emprendedor) {
        return (
            <>
                <HeaderComp />
                <Container>
                    <Row>
                        <Col>
                            <Card
                                className="mb-4 shadow p-3 mb-5 bg-white rounded"
                                style={{ width: '25rem' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:4000/user/${id}`}
                                />
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
                        <Col></Col>
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
