import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Navbar from './Navbar.js';
import Footer from './Footer';
import ContactForm from './Contact';
import './App.css';
import './styles/design.css';

class App extends Component {
  render() {

    return (
      <div >
          < Navbar />
          < LandingPage
          
          />
          < ContactForm  
            
          />
          <Footer />
      </div>
    );
  }
}

export default App;
