import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <NavbarComp />
            <Switch>
                <Route path="/"></Route>
            </Switch>
        </Router>
    );
}

export default App;
