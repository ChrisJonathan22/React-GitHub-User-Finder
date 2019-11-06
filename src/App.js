import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import WelcomeScreen from './Components/WelcomeScreen/WelcomeScreen';
import Header from './Components/Header/Header';
import Repos from './Components/Repos/Repos';
import Orgs from './Components/Orgs/Orgs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    return (
      <Router>
        <div className='App'>
            <Header />
            <WelcomeScreen />
              <Switch>
                <Route activeClassName = 'active' exact path='/' component = { Home } />
                <Route path='/repos' component = { Repos } />
                <Route path='/orgs' component = { Orgs } />
              </Switch>
        </div>
      </Router>
    );
}

export default App;
