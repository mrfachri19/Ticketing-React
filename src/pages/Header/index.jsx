import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    // console.log("home");
    this.props.history.push("/home");
  };

  handleProfile = () => {
    // console.log("profile");
    this.props.history.push("/profile");
  };

  handlePayment = () => {
    // console.log("payment");
    this.props.history.push("/payment");
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <Navbar bg="white" expand="sm" className="nav__brand">
        <Container fluid>
          <Navbar.Brand className="navbar__tiket">
            <img src={tiket} alt="ticketz 1" />
            <Navbar.Toggle className="nav__brand" aria-controls="responsive-navbar-nav" />
          </Navbar.Brand>

          <Navbar.Collapse className="nav justify-content-end" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={this.handleHome} style={{ marginRight: "40px" }}>
                Home
              </Nav.Link>
              <Nav.Link onClick={this.handleProfile} style={{ marginRight: "40px" }}>
                Profile
              </Nav.Link>
              <Nav.Link onClick={this.handlePayment}>Payment</Nav.Link>
            </Nav>
            <Nav className="justify-content-end ">
              <NavDropdown
                title="Location"
                className="justify-content-end"
                style={{ marginRight: "30px" }}
              >
                <NavDropdown.Item href="#action/3.1">Jakarta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Medan </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Yogyakarta</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" style={{ marginRight: "40px" }}>
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
              <Button variant="primary" className="navbar__button" style={{ marginRight: "40px" }}>
                Sign In
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
