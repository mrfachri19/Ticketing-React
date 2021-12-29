import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import axios from "../../../utils/axios";

import "./index.css";

export class TicketResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.location.state
        ? props.location.state.setDataBooking.userId
        : "",
      movieId: props.location.state
        ? props.location.state.setDataBooking.movieId
        : "",
      scheduleId: props.location.state
        ? props.location.state.setDataBooking.scheduleId
        : "",
      dateBooking: props.location.state
        ? props.location.state.setDataBooking.dateBooking
        : "",
      timeBooking: props.location.state
        ? props.location.state.setDataBooking.timeBooking
        : "",
      seat: props.location.state
        ? props.location.state.setDataBooking.seat
        : "",
      paymentMethod: props.location.state
        ? props.location.state.setDataBooking.paymentMethod
        : "",
      movieName: props.location.state
        ? props.location.state.setDataBooking.movieName
        : "",
      tickets: [],
      isLoading: false,
    };
    console.log(props.location.state);
  }
  componentDidMount() {
    console.log("Component DidMount...");
    this.getUserBuyTicket();
    if (!this.state.userId || !this.state.movieId || !this.state.scheduleId) {
      this.props.history.push("/");
    }
  }

  getUserBuyTicket = async () => {
    try {
      const response = await axios.get(`booking/ticket/${this.state.userId}`);
      this.setState({
        isLoading: true,
        tickets: response.data.data[0],
      });
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleLinkToProfile = () => {
    const {
      userId,
      movieId,
      scheduleId,
      dateBooking,
      timeBooking,
      seat,
      paymentMethod,
      movieName,
    } = this.state;
    const userBooking = {
      userId,
      movieId,
      scheduleId,
      dateBooking,
      timeBooking,
      seat,
      paymentMethod,
      movieName,
    };
    this.props.history.push("/profile", { userBooking });
  };
  render() {
    console.log(this.state.tickets);
    console.log(
      this.state.isLoading ? this.state.tickets.movieName : "loading..."
    );
    // console.log(this.state.isLoading ? this.state.tickets : "loading...");
    return (
      <div className="body__result">
        <Header />
        <Container>
          <Row>
            <div className="tiketresult">
              <main className="ticket__result-main">
                <section className="ticket__result-container">
                  {this.state.isLoading ? (
                    <section className="ticket__result-card">
                      <h5 className="ticket__result-title">Proof of Payment</h5>
                      <div className="ticket__result-header">
                        <div className="ticket__result-header-column">
                          <img
                            // src={Tickitz}
                            className="ticket__result-image img-fluid"
                            alt="Tickitz"
                          />
                          <h6>Admit One</h6>
                          <img
                            // src={Tickitz}
                            className="ticket__result-image img-fluid"
                            alt="Tickitz"
                          />
                        </div>
                      </div>
                      <img
                        // src={QRCode}
                        alt="Barcode"
                        className="ticket__result-image-barcode img-fluid d-block d-md-none"
                      />
                      <div className="ticket__result-body">
                        <div className="ticket__result-body-space mb-4">
                          <h6>Movie</h6>
                          <span>{this.state.tickets.movieName}</span>
                        </div>
                        <div className="row ticket__result-body-desc">
                          <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                            <h6>Date</h6>
                            <span>{this.state.tickets.dateBooking}</span>
                          </div>
                          <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                            <h6>Time</h6>
                            <span>{this.state.tickets.timeBooking}</span>
                          </div>
                          <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                            <h6>Category</h6>
                            <span>-</span>
                          </div>
                          <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                            <h6>Count </h6>
                            <span>{this.state.tickets.seat.length} Pieces</span>
                          </div>
                          <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                            <h6>Seats</h6>
                            <span>{this.state.tickets.seat.join(",")}</span>
                          </div>
                          <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                            <h6>Price</h6>
                            <span>${this.state.tickets.totalPayment}</span>
                          </div>
                        </div>
                        <div className="ticket__result-body-total d-flex d-md-none">
                          <span>Total</span>
                          <span className="fw-bold">
                            ${this.state.tickets.totalPayment}
                          </span>
                        </div>
                      </div>
                      <div className="ticket__result-choose">
                        <button className="ticket__result-button">
                          <div className="d-flex align-items-center">
                            {/* <Download /> */}
                            Download
                          </div>
                        </button>
                        <button className="ticket__result-button">
                          <div className="d-flex align-items-center">
                            {/* <Printer /> */}
                            Print
                          </div>
                        </button>
                      </div>
                    </section>
                  ) : (
                    <p className="text-center fs-4 fw-bold">
                      Memuat hasil tiket, silahkan tunggu...
                    </p>
                  )}
                </section>
              </main>
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(TicketResult);
