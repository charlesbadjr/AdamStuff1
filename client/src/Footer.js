import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import ContactForm from './Contact';



class Footer extends Component {

    render() {

    return(
        <footer className="footer">
          <h5 > 
            More Ways To Get In Touch:
          </h5>
          <div className="socialIcon">
          
            <div>
              <SocialIcon url="https://www.linkedin.com/" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div >
            <SocialIcon url="https://www.facebook.com/myconnectinc/" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="https://www.twitter.com/" style={{ height: 100, width: 100 }}/>
            </div>
            
            <div>
            <SocialIcon url="https://www.instagram.com/myconnectinc/" style={{ height: 100, width: 100 }}/>
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
