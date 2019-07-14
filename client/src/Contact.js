import React, { Component } from 'react';
import {Form, Header, Input, Button, Icon } from 'semantic-ui-react';



class ContactForm extends Component {
state ={ fullName:'', city:'', email:'', residentState:'', phoneNumber:'', message:'' }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.addcontacts(this.state.contacts)
  }

  render() {
      const {fullName, city, residentState, email, phoneNumber, message} = this.state;
    return (
      <div>
          <Form >
             <Form.Input
               required
               placeholder=" Your Name"
               name="fullName"
               value={fullName}
               onChange={ e => this.setState({ fullName: e.target.value }) }
               />
              <Form.Input
                required
                placeholder="City"
                name="city"
                value={city}
                onChange={ e => this.setState({ city: e.target.value }) }

                />
                <Form.Input
                required
                placeholder="State"
                name="State"
                value={residentState}
                onChange={ e => this.setState({ residentState: e.target.value }) }

                />
                <Form.Input
                placeholder="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={ e => this.setState({ phoneNumber: e.target.value }) }

                <Form.Input
                  required
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={ e => this.setState({ email: e.target.value }) }
                />
                <Form.Input
                placeholder="Questions or Comments"
                name="message"
                value={message}
                onChange={ e => this.setState({ message: e.target.value }) }

                />

                <Button color="black"
                    type="submit" onClick={this.handleSubmit} >
                        Contact Me!
                </Button>
          </Form>
      </div>
    );
  }
}

export default ContactForm;