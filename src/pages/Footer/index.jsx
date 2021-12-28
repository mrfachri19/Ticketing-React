import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { RiYoutubeLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import tiket from "../../assets/image/Vector.png";
import vektor13 from "../../assets/image/Vector13.png";
import vektor11 from "../../assets/image/Vector-11.png";
import vektor12 from "../../assets/image/Vector-12.png";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <Container>
          <div className="row text-center">
            <div className="col-sm-3 colom1" style={{ marginTop: "40px" }}>
              <img src={tiket} alt="" style={{ marginBottom: "29px" }} />
              <p style={{ color: "#6E7191" }}>
                Stop waiting in line. Buy tickets <br /> conveniently, watch
                movies quietly.
              </p>
            </div>

            <div className="col-sm-3 colom2 text-center">
              <h5 style={{ marginTop: "40px" }}>Explore</h5>
              <div className="list">
                <p style={{ color: "#6E7191" }}>Cinemas</p>
              </div>

              <div className="cinemas text-center">
                <p style={{ color: "#6E7191" }}>Movie list</p>
                <p style={{ color: "#6E7191" }}>My Ticket</p>
                <p style={{ color: "#6E7191" }}>Notification</p>
              </div>
            </div>

            <div className="col-sm-3 colom3 text-center">
              <h6 style={{ marginBottom: "30px", marginTop: "40px" }}>
                Our Sponsor
              </h6>
              <div className="row img_sponsor">
                <img
                  style={{ marginBottom: "20px", width: "8rem" }}
                  src={vektor13}
                  alt=""
                />{" "}
              </div>
              <div className="row img_sponsor">
                <img
                  style={{
                    marginBottom: "20px",
                    width: "8rem",
                  }}
                  src={vektor11}
                  alt=""
                />
              </div>
              <div className="row img_sponsor">
                <img
                  style={{ marginBottom: "20px", width: "8rem" }}
                  src={vektor12}
                  alt=""
                />
              </div>
            </div>

            <div className="col-sm-3 colom4 text-center">
              <h6 style={{ marginTop: "40px" }}>Follow Us</h6>
              <div className="row">
                <p style={{ color: "#6E7191" }}>
                  {" "}
                  <FiFacebook /> Ticketz cinema.id
                </p>
              </div>
              <div className="row">
                <p style={{ color: "#6E7191" }}>
                  {" "}
                  <GrInstagram /> Ticketz cinema.id
                </p>
              </div>
              <div className="row">
                <p style={{ color: "#6E7191" }}>
                  {" "}
                  <FiTwitter /> Ticketz cinema.id
                </p>
              </div>
              <div className="row">
                <p style={{ color: "#6E7191" }}>
                  {" "}
                  <RiYoutubeLine /> Ticketz cinema.id
                </p>
              </div>
            </div>
          </div>
          <div className="row baris1 text-center">
            <div className="col-sm-12">
              <p
                className="text-center"
                style={{
                  color: "#6E7191",
                  marginTop: "40px",
                  marginBottom: "20px",
                }}
              >
                © 2020 Tickitz. All Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
