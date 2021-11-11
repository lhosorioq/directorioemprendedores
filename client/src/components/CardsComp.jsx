import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function HomeView(props) {
    const { data } = props;
    const uri = `http://localhost:4000/user/`;
    const [emprendedores, setEmprendedores] = useState(null);

    useEffect(() => {
        loadEmprendedores();
    });

    const loadEmprendedores = () => {
        if (!emprendedores) {
            setEmprendedores(data);
        }
    };

    if (emprendedores) {
        return (
            <Container className="mt-4">
                <Row xs={1} md={3} className="g-4">
                    {emprendedores.map((emprendedor, i) => {
                        return (
                            <Col key={emprendedor._id}>
                                <Card
                                    style={{ width: '23rem' }}
                                    className="mb-4 shadow p-3 mb-5 bg-white rounded"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={uri + emprendedor._id}
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
                                            Servicio: {
                                                emprendedor.actividad
                                            }{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Direccion: {
                                                emprendedor.direccion
                                            }{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Telefono: {
                                                emprendedor.telefono
                                            }{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Ciudad: {emprendedor.ciudad}{' '}
                                        </Card.Text>
                                        <Card.Text>
                                            {' '}
                                            Departamento:{' '}
                                            {emprendedor.departamento}{' '}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
    return <></>;
}

HomeView.propTypes = {};

export default HomeView;
