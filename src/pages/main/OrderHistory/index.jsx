import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
  Nav,
  DropdownButton,
  Dropdown,
  Button
} from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import image from "../../../assets/image/Ellipse 11.png";
import cinema from "../../../assets/image/Vector-1.png";
import "./index.css";

const Profile = () => {
  return (
    <div className="body__payment">
      <Header />
      <Container>
        <Row>
          <Col sm={4}>
            <Card style={{ width: "18rem" }}>
              <h5
                style={{
                  marginLeft: "30px",
                  marginTop: "40px",
                  color: "#4E4B66",
                  fontSize: "16px"
                }}
              >
                INFO
              </h5>
              <img src={image} rounded style={{ width: "8rem", marginLeft: "80px" }} alt="" />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Your Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: "center" }}>
                  Moviegoers
                </Card.Subtitle>
                <hr className="my-4" />
                <Card.Subtitle className="mb-2 text-muted">Loyalty Points</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <div className="card__points">
                    <h5
                      style={{
                        fontSize: "16px",
                        color: "white",
                        marginLeft: "20px",
                        marginTop: "20px"
                      }}
                    >
                      Moviegores
                    </h5>
                    <p
                      style={{
                        fontSize: "20px",
                        color: "white",
                        marginLeft: "20px",
                        marginTop: "20px"
                      }}
                    >
                      320 points
                    </p>
                  </div>
                  <p style={{ marginTop: "20px" }}> 180 points become to Master</p>
                  <ProgressBar variant="primary" now={60} />
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            <Row>
              <div className="navbar__profile">
                <Nav defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li">
                    <Nav.Link href="/home">Account Settings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Order History</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Row>
            <Row>
              <div className="orderbox">
                <Row>
                  <Col sm={9}>
                    <p style={{ fontSize: "14px", color: "#4E4B66" }}>
                      Tuesday, 07 July 2021 - 4.30 PM
                    </p>
                    <h5 style={{ fontSize: "20px" }}>Spiderman: Homecoming</h5>
                  </Col>
                  <Col sm={3}>
                    <img src={cinema} style={{ width: "6rem", marginRight: "200px" }} alt="" />
                  </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                  <Col sm={9}>
                    <Button variant="primary" type="submit">
                      Ticket in Active
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <DropdownButton id="dropdown-basic-button" title="Movie Detail">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </div>
            </Row>
            <Row>
              <div className="orderbox">
                <Row>
                  <Col sm={9}>
                    <p style={{ fontSize: "14px", color: "#4E4B66" }}>
                      Tuesday, 07 July 2021 - 4.30 PM
                    </p>
                    <h5 style={{ fontSize: "20px" }}>Spiderman: Homecoming</h5>
                  </Col>
                  <Col sm={3}>
                    <img src={cinema} style={{ width: "6rem", marginRight: "200px" }} alt="" />
                  </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                  <Col sm={9}>
                    <Button variant="primary" type="submit">
                      Ticket in Active
                    </Button>
                  </Col>
                  <Col sm={3}>
                    <DropdownButton id="dropdown-basic-button" title="Movie Detail">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
