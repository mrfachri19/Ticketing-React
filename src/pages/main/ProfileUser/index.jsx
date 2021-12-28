import React, { Component } from "react";
import { Container, Row, Col, Card, Nav, Form, Button } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import { GetUser } from "../../../store/actions/user";
import { connect } from "react-redux";
import axios from "../../../utils/axios";
import Profiluser from "../../../components/ProfileInfo";
import "./index.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: localStorage.getItem("user_id"),
      form_profile: {
        firstName: props.user.users.firstName,
        lastName: props.user.users.lastName,
        email: props.user.users.email,
        noTelp: props.user.users.phoneNumber,
      },
      menu: false,
      isError: true,
      isActive: true,
      message: "",
    };
  }
  componentDidMount = () => {
    this.getUserInformation();
  };

  getUserInformation = () => {
    this.props.GetUser();
  };
  handleMenuProfile = (e) => {
    if (e.target.textContent === "Account Settings") {
      this.setState({
        menu: false,
        isActive: true,
      });
    } else {
      this.setState({
        menu: true,
        isActive: false,
      });
    }
  };
  handleUpdateProfile = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, noTelp } = this.state.form_profile;
    const setDataProfile = { firstName, lastName, email, noTelp };
    if (firstName === "" || lastName === "" || email === "" || noTelp === "") {
      this.setState({
        isError: true,
        message: "Please complete form profile!",
      });
    } else {
      axios
        .patch("user/update-profile", setDataProfile)
        .then(() => {
          this.props.GetUser();
          this.setState({
            form_profile: {
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
            },
            isError: false,
          });
        }) // getUser()
        .catch((error) => {
          this.setState({
            isError: true,
            message: error.response.data.message,
          });
        });
    }
  };
  handleInputProfile = (e) => {
    this.setState({
      form_profile: {
        ...this.state.form_profile,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="body__payment">
        <Header />
        <Container>
          <Row>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Profiluser />
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
                  <Form onSubmit={this.handleUpdateProfile}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={this.handleInputProfile}
                          placeholder="Write your new first name..."
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={this.handleInputProfile}
                          placeholder="Write your new last name..."
                          name="lastName"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          onChange={this.handleInputProfile}
                          placeholder="Write your new email..."
                          name="email"
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Write your new phone number..."
                          onChange={this.handleInputProfile}
                          name="noTelp"
                        />
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
                        <Form.Control
                          type="password"
                          placeholder="New Password"
                        />
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
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = { GetUser };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
