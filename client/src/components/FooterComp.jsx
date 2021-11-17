import React from 'react';
import { Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterComp() {
    return (
        <>
            <footer className="bg-dark text-white">
                <div className="container">
                    <Row>
                        <Col>
                            <h3>Directorio De Emprendedores</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Corrupti totam molestias iste
                                laudantium impedit, nulla dolorum. Quam sunt
                                voluptatibus omnis?
                            </p>
                        </Col>
                        <Col>
                            <h3>Contact Info</h3>
                        </Col>
                        <Col>
                            <Nav className="m-auto">
                                <Nav.Link as={Link} to={'/admin'}>
                                    Admins
                                </Nav.Link>
                                <Nav.Link as={Link} to={'/conocenos'}>
                                    Conócenos
                                </Nav.Link>
                                <Nav.Link as={Link} to={'/contacto'}>
                                    Contacto
                                </Nav.Link>
                                <Nav.Link as={Link} to={'/about'}>
                                    Sobre
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                </div>
            </footer>
        </>
    );
}

export default FooterComp;
