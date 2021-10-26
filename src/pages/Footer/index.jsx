import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Navbar, Nav, NavDropdown, Button, Container} from "react-bootstrap";
// import {faSearch} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "./index.css"; 
// import tiket from "../../assets/image/Vector.png";


// import { Link, withRouter } from "react-router-dom";

class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newName: props.name
//     };
//   }

//   handleLogout = () => {
//     console.log("Logout");
//     this.props.history.push("/login");
//   };

  render() {
    // console.log(this.props);
    // console.log(this.state);
    return (
      
<>
  <div className="row">
    <div className="col-sm-3 colom1">
      <img src="/img/Tickitz 3.png" alt="" />
      <p>Stop waiting in line. Buy tickets <br /> conveniently, watch movies quietly.</p>
    </div>

    <div className="col-sm-3 colom2">
      <h5>Explore</h5>
      <div className="list">
        <p>Cinemas</p>
      </div>
      
      <div className="cinemas">
        <p>Movie list</p>
        <p>My Ticket</p>
        <p>Notification</p>
      </div>
      
    </div>

    <div className="col-sm-3 colom3">
     <h6>our sponsor</h6>
     <img src="/img/Vector13.png" alt="" />
     <img src="/img/Vector-11.png" alt=""/>
     <img src="/img/Vector-12.png" alt=""/>
    </div>

    <div className="col-sm-3 colom4">
      <h6>follow us</h6>
      <div className="row">
        <i className="fab fa-facebook mr-3" ></i> <p> Ticketz cinema.id</p> 
      </div>
      <div className="row">
        <i className="fab fa-instagram mr-3" ></i><p >Ticketz cinema.id</p>
      </div>
      <div className="row">
        <i className="fab fa-twitter mr-3" ></i><p >Ticketz cinema.id</p>
      </div>
      <div className="row">
        <i className="fab fa-youtube mr-3" ></i><p >Ticketz cinema.id</p>
      </div>
    </div>

  </div>
  <div className="row baris1">
    <div className="col-sm-12">
      <p className="text-center">© 2020 Tickitz. All Rights Reserved.</p>
    </div>
    
  </div>

</>
          
      
    );
  }
}

export default Footer;