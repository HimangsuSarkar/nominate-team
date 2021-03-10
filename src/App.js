import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
