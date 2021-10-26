import React, { Component } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "../../../utils/axios";
import tiket from "../../../assets/image/tickitz 1.png";

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

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submit Login");
    axios
      .post("auth/login", this.state.form)
      .then((res) => {
        // console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        this.props.history.push("/homepage");
      })
      .catch((err) => {
        // console.log(err.response);
        this.setState({
          isError: true,
          msg: err.response.data.msg
        });
        setTimeout(() => {
          this.setState({
            isError: false,
            msg: ""
          });
        }, 2000);
      });
  };

  handleReset = (event) => {
    event.preventDefault();
    // console.log("Reset Form");
  };




  render() {
    return (
    
       <div className="container">
        
        <div className="row">
          <div className="col-sm-8">
          <Jumbotron>
            <div className="jumbotron text-center tiket"> 
              <img src={tiket} alt="tickitz 1" />
              <h1 className="display-4">Wait, Watch, Wow !</h1>
            </div> 
          </Jumbotron>
              <div className="jumbotron__img">
              <img src={tiket} alt="tickitz 1" />
              </div>
          </div>
        
          <div className="col-sm-4 form__login">

            <div className="row ">
              <h1>Sign In</h1>
              <p>Sign in with your data that you entered during <br /> your registration</p>
            </div>
            <div className="row login">
              <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChangeForm} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChangeForm} />
                </Form.Group>
                <div className="d-grid gap-2 form__button">
                  <Button variant="primary" type="submit" size="lg" >
                    Sign In
                  </Button>
                </div>
              </Form>
            </div>
            <div className="row text-center form__login-reset">
              <p>Forgot Your Password? <Link to ='www.google.com'>Reset Now</Link> </p>
            </div>
            <div className="row button__login">
              <div className="col-sm-6 form__login-btnlink text-center">
              <Button variant="light"> <p>Google</p> </Button> 
              </div>
              <div className="col-sm-6 form__login-btnlink text-center">
              <Button variant="light"> <p>Facebook</p> </Button>
              </div>
            </div>
          
          </div>

        </div>  
      </div>
      
    );
  }
}

export default Login;