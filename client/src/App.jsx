import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarComp from "./components/NavbarComp";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavbarComp/>
      <Route path='/'/>
    </Router>
  );
}

export default App;
