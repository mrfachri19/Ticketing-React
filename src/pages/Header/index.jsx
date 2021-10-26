import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Button, Container} from "react-bootstrap";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./index.css"; 
import tiket from "../../assets/image/Vector.png";




// import { Link, withRouter } from "react-router-dom";

class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newName: props.name
//     };
//   }

  handleHome = () => {
    console.log("home");
    this.props.history.push("/basic-login");
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <>
      <Navbar bg="white" expand="lg">
      <Container className="container">
        <Navbar.Brand ><img src={tiket} alt="ticketz 1" /></Navbar.Brand>
        <Nav className="navbar__brand">
        <Nav.Link onClick={this.handleHome}>Home</Nav.Link>
        <Nav.Link href="#link">Profile</Nav.Link>
        <Nav.Link href="#link">Payment</Nav.Link>
        </Nav>
        
        <Navbar.Collapse className="nav justify-content-end">
          <Nav className="justify-content-end ">
            <NavDropdown title="Location" className="justify-content-end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="" ><FontAwesomeIcon icon={faSearch} /></Nav.Link>
            <Button variant="primary" className="navbar__button">Sign In</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
        
          
          
           
        
     
      
    );
  }
}

export default Header;