import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function RegistroComp() {
    return (
        <Form>
            <Container>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre - Razon Social</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre o la razon social"
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Eletronico</Form.Label>
                    <Form.Control type="email" placeholder="Correo Eletronico" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Telefono de contacto</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Dirrecion Residencia o local de la empresa"
                    />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Clave</Form.Label>
                    <Form.Control type="password" placeholder="Escriba su clave" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Seleccionar Departamento</Form.Label>
                    <Form.Select
                    aria-label="Lista de departamentos"
                    controlId="formBasicDepartamentos"
                    >
                    <option>Sin departamento seleccionado</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Label>Seleccionar Ciudad / Municipio</Form.Label>
                    <Form.Select
                    aria-label="Lista de Ciudaes"
                    controlId="formBasicCiudad"
                    >
                    <option>Sin ciudad selecionada</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicDirrecion">
                    <Form.Label>Dirrecion de Residencia</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Dirrecion Residencia o local de la empresa"
                    />
                    </Form.Group>
                </Col>
                </Row>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4} className="d-grid gap-2">
                        <Button variant="outline-primary" type="submit" size="lg">
                            Registrar
                        </Button>
                    </Col>
                </Row>
            </Container>

        </Form>
    );
}
