import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavbarComp />
            <Routes>
                <Route path="/"></Route>
            </Routes>
        </Router>
    );
}

export default App;
