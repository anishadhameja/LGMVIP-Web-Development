import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/getusers'>
                <NavBar />
                <Home />
            </Route>
            <Route path='/'>
                <NavBar />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
