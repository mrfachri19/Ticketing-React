import React from "react";
import { Container, Row, Col, Card, ProgressBar, Nav, Form, Button } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import image from "../../../assets/image/Ellipse 11.png";
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
                <hr className="my-4" />
                <Row>
                  <h5>
                    Detail information <hr className="my-4" />
                  </h5>
                </Row>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="name" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="name" placeholder="Password" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                  </Row>
                  <div className="button__profile">
                    <Button variant="primary" type="submit">
                      Update Change
                    </Button>
                  </div>
                </Form>
                <Row>
                  <h5>
                    Account and Privacy <hr className="my-4" />
                  </h5>
                </Row>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                  </Row>
                  <div className="button__profile">
                    <Button variant="primary" type="submit">
                      Update Change
                    </Button>
                  </div>
                </Form>
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
