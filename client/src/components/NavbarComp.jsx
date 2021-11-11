import logo from '../assets/logo.png';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../views/HomeComp';
import Conocenos from '../views/ConocenosComp';
import Contacto from '../views/ContactoComp';
import Sobre from '../views/SobreComp';

export default function NavbarComp() {
    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <img src={logo} width="100" height="80" />
                            Directorio de Emprendedores
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
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
            </div>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/conocenos" exact>
                        <Conocenos />
                    </Route>
                    <Route path="/contacto" exact>
                        <Contacto />
                    </Route>
                    <Route path="/about" exact>
                        <Sobre />
                    </Route>
                    <Route path="/login" exact>
                        <Sobre />
                    </Route>
                    <Route path="/signup" exact>
                        <Sobre />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
