/* eslint-disable jsx-a11y/alt-text */
import logo from '../assets/logo.png';
import React  from 'react';
import {Navbar, Nav,  Container   } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom";

import Home from "./HomeComp";
import Conocenos from "./ConocenosComp";
import Contacto from "./ContactoComp";
import Sobre from "./SobreComp"



export default function NavbarComp() {
    
        return (
          <Router>
          <div>
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
              <Nav.Link as={Link}to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link}to={"/conocenos"}>Conócenos</Nav.Link>
              <Nav.Link as={Link}to={"/contacto"}>Contacto</Nav.Link>
              <Nav.Link as={Link}to={"/About"}>Sobre</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link}to={"/"}>Login</Nav.Link>
              <Nav.Link as={Link}to={"/"}>Sing Up</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    <div>
            <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/Conocenos">
                <Conocenos />
            </Route>
            <Route path="/contacto">
                <Contacto />
            </Route>
            <Route path="/sobre">
                <Sobre />
            </Route>
            </Switch>
            </div>
    </Router>
        );
    }


