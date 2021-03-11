
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
