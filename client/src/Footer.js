import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

    render() {

    return(
        <footer className="footer">
          <h5 > 
            Get in Touch:
          </h5>
          <div className="socialIcon">
          
            <div>
              <SocialIcon url="https://www.linkedin.com/" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div >
            <SocialIcon url="http://facebook.com/" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="https://twitter.com/" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="jerginscharlie@gmail.com" style={{ height: 100, width: 100 }}/>
            </div>

          </div>
          <h6> 
            Powered By Coffee
          </h6>
        </footer>
    );   
  }
 }

export default Footer;
