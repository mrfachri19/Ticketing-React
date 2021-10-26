import React, { Component } from "react";
import axios from "../../../utils/axios";

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
        this.props.history.push("/basic-react");
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
    // console.log(this.state);
    return (
      <div className="container text-center">
        <h1>Sign In</h1>
        <p>Sign in with your data that you entered during your registration</p>
        <hr />
        {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <input
            type="email"
            placeholder="write your Email"
            name="email"
            onChange={this.handleChangeForm}
          />
          <br />
          <input
            type="password"
            placeholder="Input Password"
            name="password"
            onChange={this.handleChangeForm}
          />
          <br />
          <button className="btn btn-outline-primary" type="reset">
            Reset
          </button>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;