import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tiket from "../../../assets/image/tickitz 1.png";
import vektor from "../../../assets/image/Vector.png";
import facebook from "../../..//assets/image/Vector fac.png";
import google from "../../..//assets/image/flat-color-icons_google.png";
import axios from "../../../utils/axios";
import { Button, Form, Jumbotron, Col, Row, Toast } from "react-bootstrap";
import { GetUser } from "../../../store/actions/user";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form_input: {
        email: "",
        password: "",
      },
      users: [],
      isError: false,
      msg: "",
    };
  }

  handleInputForm = (event) => {
    this.setState({
      form_input: {
        ...this.state.form_input,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post("auth/login", this.state.form_input)
      .then((response) => {
        this.props.GetUser().then((response) => {
          localStorage.setItem("role", response.value.data.data[0].role);
          if (response.value.data.data[0].role === "admin") {
            this.props.history.push("/dashboard");
          } else {
            this.props.history.push("/");
          }
        });
        const token = response.data.data.token;
        const userId = response.data.data.id;
        localStorage.setItem("user_id", userId);
        localStorage.setItem("token", token);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          isError: true,
          msg: error.response.data.msg,
        });
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({
            isError: false,
            msg: "",
          });
        }, 2000);
      });
  };

  handleReset = (event) => {
    event.preventDefault();
    console.log("Reset Form");
  };

  render() {
    console.log(this.state.msg);
    return (
      <Row>
        <Col sm={7}>
          <Jumbotron>
            <div className="jumbotron text-center tiket">
              <img src={tiket} alt="tickitz 1" />
              <div>
                <h1>Wait, Watch, Wow !</h1>
              </div>
            </div>
          </Jumbotron>
          <div className="jumbotron__img">
            <img src={vektor} alt="tickitz 1" />
          </div>
        </Col>

        <Col sm={4} className="form__login">
          <div className="row ">
            {this.state.isError && (
              <>
                <Toast>
                  <Toast.Header closeButton={false}>
                    <strong className="me-auto">Tickitz</strong>
                  </Toast.Header>
                  <Toast.Body>{this.state.msg}</Toast.Body>
                </Toast>
              </>
            )}

            <h1>Sign In</h1>
            <p>
              Sign in with your data that you entered during <br /> your
              registration
            </p>
          </div>
          <div className="row login">
            <Form onSubmit={this.handleSubmitForm} onReset={this.handleReset}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <input
                  type="email"
                  className="input__form-login"
                  id="email"
                  name="email"
                  onChange={this.handleInputForm}
                  placeholder="Write your email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <input
                  type="password"
                  className="input__form-login"
                  id="password"
                  name="password"
                  onChange={this.handleInputForm}
                  placeholder="Write your password"
                />
              </Form.Group>
              <div className="d-grid gap-2 form__button">
                <button type="submit" className="button__signin">
                  Sign In
                </button>
              </div>
            </Form>
          </div>
          <div className="row text-center form__login-reset">
            <p>
              Forgot Your Password? <Link to="www.google.com">Reset Now</Link>{" "}
            </p>
          </div>
          <div className="row text-center .form__login-register">
            <p>
              Don't have any account? <Link to="/register">Register</Link>{" "}
            </p>
          </div>
          <div className="row button__login">
            <div className="col-sm-6 form__login-btnlink text-center">
              <Button variant="light">
                <img
                  src={google}
                  style={{ marginBottom: "2px" }}
                  alt="tickitz 1"
                />
                <p style={{ marginLeft: "2px" }}>Google</p>
              </Button>
            </div>
            <div className="col-sm-6 form__login-btnlink text-center">
              <Button variant="light">
                <img
                  src={facebook}
                  style={{ marginBottom: "2px" }}
                  alt="tickitz 1"
                />
                <p style={{ marginLeft: "2px" }}>Facebook</p>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  GetUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
