import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavbarComp />
        </Router>
    );
}

export default App;
