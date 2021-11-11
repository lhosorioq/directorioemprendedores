import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
                        <Col></Col>
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
