import React, { Component } from "react";
import Warning from "../../assets/image/vektor goo.png";
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
        <section className="personal__main-info">
          <h4 className="personal__main-info-title">Personal Info</h4>
          <div className="personal__main-info-card">
            <div className="personal__main-info-card-child">
              <p>Full Name</p>
              <input
                type="text"
                className="personal__main-info-card-input"
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
                className="personal__main-info-card-input"
                value={this.state.users.length > 0 && this.state.users[0].email}
              />
            </div>
            <div className="personal__main-info-card-child">
              <p>Phone Number</p>
              <input
                type="text"
                className="personal__main-info-card-input"
                name="phoneNumber"
                value={
                  this.state.users.length > 0 && this.state.users[0].noTelp
                }
              />
            </div>
            <div className="personal__main-info-card-alert">
              <img src={Warning} className="img-fluid" alt="Warning Alert" />
              <span>Fill your data correctly.</span>
            </div>
          </div>
          <button className="payment__main-method-button-active-mobile">
            Pay your order
          </button>
        </section>
      </>
    );
  }
}

export default PersonalInfo;
