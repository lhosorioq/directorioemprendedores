import logo from '../assets/logo.png';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={Link} to={'/'}>
                        <img src={logo} width="100" height="80" alt="logo" />
                        Directorio de Emprendedores
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to={'/'}>
                                Home
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
                        <Nav>
                            <Nav.Link as={Link} to={'/login'}>
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/signup'}>
                                Sing Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
