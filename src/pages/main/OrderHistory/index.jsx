import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import cinema from "../../../assets/image/Vector-1.png";
import "./index.css";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTicked } from "../../../store/actions/user";
import { ToastContainer, toast } from "react-toastify";

export class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: localStorage.getItem("nameMovie"),
      orders: [],
      showDetails: false,
      isTickedUsed: "",
    };
  }

  componentDidMount() {
    this.getOrderHistory();
  }

  getOrderHistory = () => {
    axios
      .get("booking/user-id")
      .then((response) => {
        this.setState({
          orders: response.data.data,
        });
      })
      .catch((error) => new Error(error));
  };
  handleShowDetails = (event) => {
    if (event.target.textContent === "Show Details") {
      this.setState({
        showDetails: true,
      });
    } else if (!event.target.textContent === "Show Details") {
      this.setState({
        showDetails: false,
      });
    }
  };
  handleUseTicked = (id) => {
    this.props
      .useTicked(id)
      .then((response) => {
        this.setState(
          {
            isTickedUsed: response.value.data.data.statusTicket,
          },
          () => {
            this.getOrderHistory();
          }
        );
        toast.success("Ticket Actived");
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { orders } = this.state;
    console.log(orders);
    return (
      <div className="body__payment">
        <Header />
        <Container>
          <div className="profile__column-settings-order-history">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  className="profile__column-settings-order-history-card"
                  key={order.id}
                >
                  <ToastContainer />
                  <div className="profile__column-settings-order-history-desc">
                    <span className="order__date">
                      {new Date(order.dateBooking).toDateString()} -{" "}
                      {order.timeBooking}
                    </span>
                    <div className="profile__column-settings-order-history-details">
                      <h3 style={{ fontSize: "24px" }}>
                        {this.state.movieName}
                      </h3>
                      <img
                        src={cinema}
                        width="100"
                        style={{ objectFit: "contain" }}
                        className="img-fluid"
                        alt="Cineone21"
                      />
                    </div>
                    <hr />
                    <div className="profile__column-settings-order-history-bottom">
                      <button
                        className={`profile__column-settings-order-history-bottom-checked-${
                          order.statusUsed !== "active" ? "used" : "active"
                        }`}
                        onClick={
                          order.statusUsed === "active"
                            ? () => this.handleUseTicked(order.id)
                            : null
                        }
                      >
                        {order.statusUsed !== "active"
                          ? "Ticket Used"
                          : "Ticket in active"}
                      </button>

                      <button
                        className="d-none d-md-block profile__column-settings-order-history-bottom-show-details"
                        onClick={this.handleShowDetails}
                      >
                        Show Details
                      </button>
                    </div>
                  </div>
                  {this.state.showDetails ? (
                    <div className="profile__column-settings-order-history-bottom-show-details">
                      <div className="profile__column-settings-order-history-show-details-title">
                        <p>Seats</p>
                        <h6>{order.seat}</h6>
                      </div>
                      <div className="profile__column-settings-order-history-show-details-title">
                        <p>Date Booking</p>
                        <h6>{new Date(order.dateBooking).toDateString()}</h6>
                      </div>
                      <div className="profile__column-settings-order-history-show-details-title">
                        <p>Time Booking</p>
                        <h6>{order.timeBooking}</h6>
                      </div>
                      <div className="profile__column-settings-order-history-show-details-title">
                        <p>paymentMethod</p>
                        <h6>{order.paymentMethod}</h6>
                      </div>
                      <div className="profile__column-settings-order-history-show-details-title">
                        <p>Total Ticket</p>
                        <h6>{order.totalTicket}</h6>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))
            ) : (
              <p className="text-center fs-2 fw-bold mt-3">
                History is empty, Please Order Movie <Link to="/">disini!</Link>
              </p>
            )}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  useTicked,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
