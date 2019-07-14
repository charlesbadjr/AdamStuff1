import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import noMatch from './404Match.js';
import './App.css';
import './styles/design.css';

class App extends Component {
  render() {

    return (
      <div >
          <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route component={noMatch} />
          </Switch >
      </div>
    );
  }
}

export default App;
