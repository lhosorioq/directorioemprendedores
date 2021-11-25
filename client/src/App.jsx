import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/HomeView';
import Registro from './views/RegistroView';
import Conocenos from './views/ConocenosComp';
import Contacto from './views/Contactoviews';
import LoginAdminView from './views/LoginAdminView';
import LoginEmprendedorView from './views/LoginEmprendedorView';
import DataEmprendedorView from './views/DataEmprendedorView';
import DataAdminView from './views/DataAdminView';
import FooterComp from './components/FooterComp';
import { RoutePrivate } from './components/RoutePrivate';

function App() {
    return (
        <Router>
            <NavbarComp />
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
                <Route path="/login" exact>
                    <LoginEmprendedorView />
                </Route>
                <RoutePrivate path="/emprendedor" exact>
                    <DataEmprendedorView />
                </RoutePrivate>
                <Route path="/signup" exact>
                    <Registro />
                </Route>
                <Route path="/admin" exact>
                    <LoginAdminView />
                </Route>
                <RoutePrivate path="/admin/data" exact>
                    <DataAdminView />
                </RoutePrivate>
                <RoutePrivate path="/logout" exact></RoutePrivate>
            </Switch>
            <FooterComp />
        </Router>
    );
}

export default App;
