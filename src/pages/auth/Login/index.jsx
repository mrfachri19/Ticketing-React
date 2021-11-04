import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Jumbotron, Col, Row } from "react-bootstrap";
import { getdatauser } from "../../../Stores/actions/getdatauser";
import { Link } from "react-router-dom";
// import axios from "../../../utils/axios";
import { connect } from "react-redux";
import { login } from "../../../Stores/actions/auth";
import tiket from "../../../assets/image/tickitz 1.png";
import vektor from "../../../assets/image/Vector.png";
import facebook from "../../..//assets/image/Vector fac.png";
import google from "../../..//assets/image/flat-color-icons_google.png";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: ""
    };
  }

  handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value // email : bagus@gmail.com
      }
    });
  };

  // getUserById = (id) => {
  //   axios
  //     .get(`user/${id}`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       this.setState({
  //         dataProfile: res.data.data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  //   const user = [];
  //   const data = JSON.stringify(user[0]); // res.data.data[0]
  //   localStorage.setItem("dataUser", data);

  //   // UNTUK GET NYA ketika di komponen lain
  //   // let dataProfile = localStorage.getItem("dataUser");
  //   // dataProfile = JSON.parse(dataProfile);
  //   // })
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.form).then((res) => {
      console.log("login");
      localStorage.setItem("token", res.value.data.data.token);
      this.props.getdatauser(res.value.data.data.id).then((res) => {
        this.props.history.push("/homepage");
      });
      // console.log(this.props.auth);
      // console.log(res);
      // localStorage.setItem("token", this.props.auth.idUser);
    });
  };

  handleReset = (event) => {
    event.preventDefault();
    // console.log("Reset Form");
  };

  render() {
    return (
      <Row>
        <Col sm={7}>
          <Jumbotron>
            <div className="jumbotron text-center tiket">
              <img src={tiket} alt="tickitz 1" />
              <h1 className="display-4">Wait, Watch, Wow !</h1>
            </div>
          </Jumbotron>
          <div className="jumbotron__img">
            <img src={vektor} alt="tickitz 1" />
          </div>
        </Col>

        <Col sm={4} className="form__login">
          <div className="row ">
            <h1>Sign In</h1>
            <p>
              Sign in with your data that you entered during <br /> your registration
            </p>
          </div>
          <div className="row login">
            <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
              {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={this.handleChangeForm}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChangeForm}
                />
              </Form.Group>
              <div className="d-grid gap-2 form__button">
                <Button variant="primary" type="submit" size="lg">
                  Sign In
                </Button>
              </div>
            </Form>
          </div>
          <div className="row text-center form__login-reset">
            <p>
              Forgot Your Password? <Link to="www.google.com">Reset Now</Link>{" "}
            </p>
          </div>
          <div className="row button__login">
            <div className="col-sm-6 form__login-btnlink text-center">
              <Button variant="light">
                <img src={google} style={{ marginBottom: "2px" }} alt="tickitz 1" />
                <p style={{ marginLeft: "2px" }}>Google</p>
              </Button>
            </div>
            <div className="col-sm-6 form__login-btnlink text-center">
              <Button variant="light">
                <img src={facebook} style={{ marginBottom: "2px" }} alt="tickitz 1" />
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
  auth: state.auth
});

const mapDispatchToProps = { login, getdatauser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
