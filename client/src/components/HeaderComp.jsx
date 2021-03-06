import React from 'react';
import logo from '../assets/logo.png';
import { Col, Row } from 'react-bootstrap';

function HeaderComp() {
    return (
        <>
            <header
                className="bg-dark text-white mb-4 shadow p-3 mb-5"
                style={{ height: '200px' }}
            >
                <div className="container">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={2}>
                            <img
                                className="float-end"
                                src={logo}
                                width="200"
                                height="140"
                                alt="logo"
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <h2>
                                Pon a volar tus sueños con el Directorio De
                                Emprendedores
                            </h2>
                        </Col>
                    </Row>
                </div>
            </header>
        </>
    );
}

export default HeaderComp;
