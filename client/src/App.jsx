import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/HomeView';
import Conocenos from './views/ConocenosComp';
import Contacto from './views/ContactoComp';
import Sobre from './views/SobreComp';

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
        </Router>
    );
}

export default App;
