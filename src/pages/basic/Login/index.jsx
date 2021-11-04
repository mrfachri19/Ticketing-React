import React, { Component } from "react";
import axios from "../../../utils/axios";
import { Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../Stores/actions/auth";

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

  componentDidMount() {
    document.title = "Login Page";
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

  getUserById = (id) => {
    axios
      .get(`user/${id}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          dataSchedule: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
    const user = [];
    console.log(user);
    const data = JSON.stringify(user[0]); // res.data.data[0]
    localStorage.setItem("dataUser", data);

    // UNTUK GET NYA ketika di komponen lain
    // let dataProfile = localStorage.getItem("dataUser");
    // dataProfile = JSON.parse(dataProfile);
    // })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.form).then((res) => {
      // console.log(this.props.auth);
      // console.log(res);
      // localStorage.setItem("token", this.props.auth.idUser);
      localStorage.setItem("token", res.value.data.data.token);
      this.props.history.push("/basic-home");
      // console.log("Submit Login");
      // axios
      //   .post("auth/login", this.state.form)
      //   .then((res) => {
      //     // console.log(res.data.data.token);
      //     localStorage.setItem("token", res.data.data.token);
      //     this.props.history.push("/homepage");
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.msg);
      //     this.setState({
      //       isError: true,
      //       msg: err.response.data.msg
      //     });
      //     setTimeout(() => {
      //       this.setState({
      //         isError: false,
      //         msg: ""
      //       });
      //     }, 2000);
      //   });
    });
  };
  handleReset = (event) => {
    event.preventDefault();
    // console.log("Reset Form");
  };

  render() {
    const { isError, msg, isLoading } = this.props.auth;
    return (
      <div className="container text-center">
        <h1>Login Page</h1>
        <hr />
        {isError && <div className="alert alert-danger">{msg}</div>}
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <input
            type="email"
            placeholder="Input email"
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
        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <Toast show={isError}>
            <Toast.Header closeButton={false}>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{msg}</Toast.Body>
          </Toast>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
