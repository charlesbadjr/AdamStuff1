import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Image } from 'semantic-ui-react';
import {LogoConnectinc} from './styles/LogoConnectinc.png';



class noMatch extends Component {

    render() {
        return (
        <div className="noMatch">    
           <div className="noMatch1" >
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
              <div className="linkHome" >
                  <h1> This route doesn't exist </h1>
                    <Link to="/LandingPage"> go home </Link>
              </div>
          </div> 
        </div>
        
        )
    };
}

export default noMatch;
