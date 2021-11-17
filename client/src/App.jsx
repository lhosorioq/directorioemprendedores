import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/HomeView';
import Registro from './views/RegistroComp';
import Conocenos from './views/ConocenosComp';
import Contacto from './views/Contactoviews';
import Sobre from './views/SobreComp';
import LoginAdminView from './views/LoginAdminView';
import LoginEmprendedorView from './views/LoginEmprendedorView';
import DataEmprendedorView from './views/DataEmprendedorView';
import DataAdminView from './views/DataAdminView';
import FooterComp from './components/FooterComp';

function App() {
    return (
        <Router>
            <NavbarComp />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/registro" exact>
                    <Registro />
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
                    <LoginEmprendedorView />
                </Route>
                <Route path="/emprendedor" exact>
                    <DataEmprendedorView />
                </Route>
                <Route path="/signup" exact>
                    <Sobre />
                </Route>
                <Route path="/admin" exact>
                    <LoginAdminView />
                </Route>
                <Route path="/admin/data" exact>
                    <DataAdminView />
                </Route>
            </Switch>
            <FooterComp/>
        </Router>
    );
}

export default App;
