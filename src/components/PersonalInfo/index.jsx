import React, { Component } from "react";
import axios from "../../utils/axios";
export class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user_id: localStorage.getItem("user_id"),
    };
  }

  componentDidMount() {
    this.getUserPersonal();
  }

  getUserPersonal = () => {
    axios
      .get("user", this.state.user_id)
      .then((response) => {
        this.setState({
          users: response.data.data,
        });
      })
      .catch((error) => {
        new Error(error.response);
      });
  };
  render() {
    console.log(this.state.users);
    return (
      <>
        <section>
          <h4 className="personal__main-info-title">Personal Info</h4>
          <div className="payment__main-info-card">
            <div className="personal__main-info-card-child">
              <p>Full Name</p>
              <input
                type="text"
                className="form-control"
                name="userId"
                value={
                  this.state.users.length > 0 && this.state.users[0].firstName
                }
              />
            </div>
            <div className="personal__main-info-card-child">
              <p>Email</p>
              <input
                type="email"
                className="form-control"
                value={this.state.users.length > 0 && this.state.users[0].email}
              />
            </div>
            <div className="personal__main-info-card-child">
              <p>Phone Number</p>
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                value={
                  this.state.users.length > 0 && this.state.users[0].noTelp
                }
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PersonalInfo;
