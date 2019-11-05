import React, { Component } from 'react';
import './App.scss';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Repos from './Components/Repos/Repos';
import Orgs from './Components/Orgs/Orgs'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Switch>
              <Route activeClassName = "active" path = '/repos' component = { Repos } />
              <Route path = '/orgs' component = { Orgs } />
            </Switch>
        </BrowserRouter>
        <Home />
      </div>
    );
  }
}
