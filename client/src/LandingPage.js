import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Connectlogo from './styles/Connectlogo.png';
import LogoConnectinc from './styles/LogoConnectinc.png';
import {Header, Image, List, Icon} from 'semantic-ui-react';
import {Contact} from './Contact';


class LandingPage extends Component {
    render() {
      return (
        <div className="App-header">

         <div className="landingPageBackground">
            <div className="navbarContainer" >  
              
               <div className="leftNav">
                    <Image src={LogoConnectinc} className="myConnectLogo" alt="My Connect Inc Logo" />
                  <h1> My Connect Inc.  </h1>
               </div>
               <div className="rightNav">
                   <h1> 
                       <Link to="/">
                          Home Security  
                       </Link> 

                      <Link to="/">
                        Business Security 
                      </Link>  
                   </h1>
               </div>
            </div>  
          <h1 >
             <p>
               My Connect Inc: 
            </p>
            <a>
              844-885-8868
            </a>
         </h1>


         <div className="stuff" > 
         <p style={{color: "white"}}>
         Upgrade your equipment or lower your bill just for switching to 
         My Connect Inc.</p>
         </div>

         <div className="space">
         
         </div>

          <div className="landingPageList" style={{color: "black" }}>
             <List>
                  <List.Item as="a" >
                    <Icon name='help'/>
                    <List.Content>
                      <List.Description>
                      Custom Security systems
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a"  >
                  <Icon name='help'/>
                    <List.Content>
                      <List.Description>
                      Home Automation
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a" > 
                  <Icon name='help' />
                    <List.Content>
                      <List.Description>
                      Install and service customized camera systems
                      </List.Description>
                    </List.Content>
                  </List.Item>
              
                  <List.Item as="a" > 
                  <Icon name='help' />
                    <List.Content>
                      <List.Description>
                      Solar for your home or business
                      </List.Description>
                    </List.Content>
                  </List.Item>
              
                  <List.Item as='a'> 
                  <Icon name='help' />
                    <List.Content>
                      <List.Description>
                      Storage Sheds and Shops
                      </List.Description>
                    </List.Content>
                  </List.Item>
              
                  <List.Item as='a'> 
                  <Icon name='help' />
                    <List.Content>
                      <List.Description>
                        Cement or Concrete buildings
                      </List.Description>
                    </List.Content>
                  </List.Item>
              
                  <List.Item as='a'> 
                  <Icon name='help' />
                    <List.Content>
                      <List.Description>
                        Protect your Windows and much more
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  
                </List>

              * No money down with up to 6 months no interest financing on all products and services.
           
           </div>
        
          </div>
      </div>
      );
    }
  }

  export default LandingPage;