import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Navbar from './Navbar.js';
import Footer from './Footer';
import ContactForm from './Contact';
import './App.css';
import axios from 'axios';
import './styles/design.css';

class App extends Component {
 state = { contacts: [], fullName:'', residentState:'', city:'', message:'', phoneNumber:'', email:'' }

  addContacts = ( )=> {
    const { fullName, residentState, city, phoneNumber, email, message, contacts } = this.state;
    axios.post('/api/contacts', {fullName, residentState, city, email, phoneNumber, message})
     .then( ({ data }) => {
         this.setState({ contacts: [data, ...contacts]})
     })
  }


  render() {
  
    return (
      <div className='app' >
          < Navbar />
          < LandingPage />
          <h1> Get In Touch </h1>
          <ContactForm  
          contacts={this.contacts}
          addContacts={this.addContacts}
          />
          <Footer/>
      </div>
    );
  }
}

export default App;
