import React, { Component } from 'react';
import LandingPage from './LandingPage';
import Navbar from './Navbar.js';
import Footer from './Footer';
import './App.css';
import './styles/design.css';

class App extends Component {
 state = { contacts: [], fullName:'', city:'', message:'', phoneNumber:'', email:'' }

  addContacts = ( )=> {
    const { fullName, city, phoneNumber, email, message, contacts } = this.state;
    axios.post('/api/contacts', {fullName, city, email, phoneNumber, message})
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
          <Footer 
            contacts={contacts}
            addContacts={this.addContacts}

          />
      </div>
    );
  }
}

export default App;
