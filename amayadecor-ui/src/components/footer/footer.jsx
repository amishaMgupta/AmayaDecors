import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Footer extends React.Component {
    render() {
      return  <Navbar bg = "light" variant="light" className="justify-content-center" >
     <Navbar.Text >
     @amayadecors
    </Navbar.Text>
    </Navbar>;
    }
  }


export default Footer;