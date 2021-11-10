/* eslint-disable jsx-a11y/alt-text */
import logo from '../assets/logo.png';
import React, { Component } from 'react';
import {Navbar, Nav,  Container   } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



class NavbarComp extends Component {
    render() {
        return (
          <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand ><img
                          src={logo}
                          width="100"
                          height="80"
                        />
                          Directorio de Emprendedores
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#conocenos">Conócenos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#singup">
                Sing Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
        );
    }
}

export default NavbarComp;