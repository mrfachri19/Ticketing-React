import React, { Component } from "react";
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import { Link } from "react-router-dom";
import "./index.css";

class Payment extends Component {
  render() {
    return (
      <div className="body__payment">
        <Header />
        <Container>
          <Row>
            <Col sm={7}>
              <h3 style={{ marginTop: "56px" }}>Payment Info</h3>
              <div className="payment">
                <div class="row">
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "left" }}>Date & time</h6>
                  </div>
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "right" }}>Tuesday, 07 July 2020 at 02:00pm</h6>
                  </div>
                </div>
                <hr class="my-4" />
                <div class="row">
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "left" }}>Movie Title</h6>
                  </div>
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "right" }}>Spiderman</h6>
                  </div>
                </div>
                <hr class="my-4" />
                <div class="row">
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "left" }}>Cinema Name</h6>
                  </div>
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "right" }}>CinemaOne21 Cinema</h6>
                  </div>
                </div>
                <hr class="my-4" />
                <div class="row">
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "left" }}>Number of Ticket</h6>
                  </div>
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "right" }}>3 Pieces</h6>
                  </div>
                </div>
                <hr class="my-4" />
                <div class="row">
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "left" }}>Total Payment</h6>
                  </div>
                  <div class="col-sm-6">
                    <h6 style={{ textAlign: "right" }}>$30,00</h6>
                  </div>
                </div>
                <hr class="my-4" />
              </div>
            </Col>
            <Col sm={4}>
              <h3>Personal Info</h3>
              <div className="payment" style={{ textAlign: "left" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>
                      <h5>Full Name</h5>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Full name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>
                      <h5>Email</h5>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>
                      <h5>Password</h5>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    <h5> Phone Number</h5>
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>+62</InputGroup.Text>
                    <FormControl id="inlineFormInputGroup" placeholder="Phone Number" />
                  </InputGroup>
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={7} style={{ marginBottom: "180px" }}>
              <h3 style={{ marginTop: "56px" }}>Choose a Payment Method</h3>
              <div className="payment__method">
                <Row>
                  <Button variant="outline-secondary">Light</Button>
                  <Button variant="outline-secondary">Light</Button>
                  <Button variant="outline-secondary">Light</Button>
                  <Button variant="outline-secondary">Light</Button>
                </Row>
                <Row>
                  <Button variant="outline-secondary">Light</Button>
                  <Button variant="outline-secondary">Light</Button>
                  <Button variant="outline-secondary">Light</Button>
                  <Button variant="outline-secondary">Light</Button>
                </Row>
                <hr className="my-4" />
                <div class="row">
                  <p style={{ marginLeft: "150px" }}>
                    Pay via Cash. <Link to="">see how it work</Link>
                  </p>
                </div>
              </div>
              <Row className="button__payment">
                <Col sm={6} style={{ marginTop: "40px" }}>
                  <Button variant="outline-primary">Primary</Button>
                </Col>
                <Col sm={6} style={{ marginTop: "40px" }}>
                  <Button variant="outline-primary">Primary</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Payment;
