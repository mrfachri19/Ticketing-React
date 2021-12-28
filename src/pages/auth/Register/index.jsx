import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import tiket from "../../../assets/image/tickitz 1.png";
import vektor from "../../../assets/image/Vector.png";
import facebook from "../../..//assets/image/Vector fac.png";
import google from "../../..//assets/image/flat-color-icons_google.png";
import { Button, Form, Jumbotron, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../../store/actions/auth";
import { toast, ToastContainer } from "react-toastify";

function Register(props) {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(props.auth.isLoading);
  const [isError, setError] = useState(props.auth.isError);
  const handleSubmitRegistration = (event) => {
    event.preventDefault();
    setLoading(false);
    const setDataRegistration = {
      firstName,
      lastName,
      email,
      noTelp,
      password,
    };
    for (const data in setDataRegistration) {
      if (setDataRegistration[data] === "") {
        toast.error("Lengkapi Form yang kosong...");
      }
    }
    props
      .register(setDataRegistration)
      .then(() => {
        setLoading(true);
        toast.success("Akun berhasil dibuat, silahkan verifikasi email anda!");
        setTimeout(() => {
          props.history.push("/login");
        }, 3000);
      })
      .catch((error) => {
        toast.error(props.auth.message);
      });
  };
  // console.log(isLoading ? props.auth.message : null);
  console.log(props.auth);
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
          <>
            <ToastContainer />
          </>

          <h1>Sign Up</h1>
          <p>
            Sign Up with your data that you entered during <br /> your Login
          </p>
        </div>
        <div className="row login">
          <Form onSubmit={handleSubmitRegistration}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <input
                type="firstName"
                className="input__form-login"
                id="firstName"
                name="firstName"
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Write your First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <input
                type="lastName"
                className="input__form-login"
                id="lastName"
                name="lastName"
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Write your Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNoTelp">
              <Form.Label>Phone Number</Form.Label>
              <input
                type="noTelp"
                className="input__form-login"
                id="noTelp"
                name="noTelp"
                onChange={(event) => setNoTelp(event.target.value)}
                placeholder="Write your Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                className="input__form-login"
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Write your password"
              />
            </Form.Group>
            <div className="d-grid gap-2 form__button">
              <button type="submit" className="button__signin">
                Sign Up
              </button>
            </div>
          </Form>
        </div>
        <div className="row text-center form__login-reset">
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
