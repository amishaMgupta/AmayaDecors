import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
class Header extends React.Component {
    render() {
      return  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">Amaya Decor</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Home Decor</Nav.Link>
          <Nav.Link href="#pricing">Gifts</Nav.Link>
          <Nav.Link href="#pricing">TLights</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse> */}
    </Navbar>
    }
  }


export default Header;
