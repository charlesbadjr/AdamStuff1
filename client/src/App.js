import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Contact from './Contact';
import noMatch from './404Match.js';
import './App.css';
import './styles/design.css'

class App extends Component {
  render() {
    return (
      <div >
          <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/contact' component={Contact} />
              <Route component={noMatch} />
          </Switch >
       <Footer /> 
      </div>
    );
  }
}

export default App;
