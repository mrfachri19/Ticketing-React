import React, { Component } from "react";
// import Seat from "../../../components/Seat";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import axios from "../../../utils/axios";
import Header from "../../Header/index";
import cinema from "../../../assets/image/Vector-11.png";
import Footer from "../../Footer/index";
import ListSeats from "../../../components/ListSeats";
import NumberSeats from "../../../components/NumberSeats";

import "./indexorder.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: ["A", "B", "C", "D", "E", "F", "G"],
      selectSeats: [],
      soldSeats: [],
      scheduleId: props.location.state ? props.location.state.scheduleId : "",
      movieId: props.location.state ? props.location.state.movieId : "",
      dateBooking: props.location.state
        ? props.location.state.dateSchedule
        : "",
      timeBooking: props.location.state
        ? props.location.state.timeSchedule
        : "",
      user_id: localStorage.getItem("user_id"),
      movieName: localStorage.getItem("nameMovie"),
      price: 70000,
      isError: false,
      message: "",
    };
  }

  componentDidMount() {
    this.getDetailOrderInfo();
    if (
      !this.state.movieId ||
      !this.state.scheduleId ||
      !this.state.dateBooking ||
      !this.state.timeBooking
    ) {
      this.props.history.push("/");
    }
  }

  getDetailOrderInfo = () => {
    const { scheduleId, movieId, dateBooking, timeBooking } = this.state;
    axios
      .get(
        `booking?scheduleId=${scheduleId}&movieId=${movieId}&dateBooking=${dateBooking}&timeBooking=${timeBooking}`
      )
      .then((response) => {
        const seats = response.data.data.map((value) => value.seat);
        this.setState({
          soldSeats: seats,
        });
      })
      .catch((error) => {
        new Error(error.response.data.message);
      });
  };

  selectSeats = (seat) => {
    // cek jika seatnya udah di pilih atau belum
    if (this.state.selectSeats.includes(seat)) {
      const removeSeats = this.state.selectSeats.filter((value) => {
        return value !== seat;
      });
      this.setState({
        selectSeats: removeSeats,
      });
    } else {
      if (this.state.selectSeats.length >= 5) {
        this.setState({
          isError: true,
          message: "Kursi tidak boleh lebih dari 5!",
        });
      } else {
        this.setState({
          selectSeats: [...this.state.selectSeats, seat],
        });
      }
    }
  };

  handleCheckout = () => {
    if (this.state.selectSeats.length === 0) {
      alert("Choose Chair");
    } else {
      const {
        movieId,
        movieName,
        scheduleId,
        dateBooking,
        timeBooking,
        selectSeats: seat,
        user_id,
      } = this.state;
      const setDataPayment = {
        movieId,
        scheduleId,
        dateBooking,
        timeBooking,
        seat,
        user_id,
        movieName,
      };
      this.props.history.push("/payment", { setDataPayment });
    }
    // pergi ke halaman payment
  };
  handleChangeMovie = () => {
    this.props.history.push("/");
  };
  render() {
    // eslint-disable-next-line no-unused-vars
    const parseDate = this.state.dateBooking;
    const leftNumber = [];
    const rightNumber = [];
    for (let i = 1; i <= 7; i++) {
      leftNumber.push(i);
    }
    for (let i = 8; i <= 14; i++) {
      rightNumber.push(i);
    }
    return (
      <div>
        <Container>
          <Header />
          <Row>
            <Col sm={8}>
              <h3>Movie Selected</h3>
              <Row>
                <Navbar
                  bg="light"
                  variant="light"
                  style={{ marginTop: "24px", width: "80%" }}
                >
                  <Container>
                    <Navbar.Brand href="#home">
                      <p>{this.state.movieName}</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Navbar.Text>
                        <Button
                          onClick={this.handleChangeMovie}
                          variant="primary"
                        >
                          Change Movie
                        </Button>
                      </Navbar.Text>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Row>
              <div
                class="row"
                style={{ marginTop: "48px", marginBottom: "24px" }}
              >
                <h3>Choose Your Seat</h3>
              </div>
              <div class="row" style={{ marginBottom: "40px" }}>
                <div class="seat">
                  {this.state.seats.map((seat, idx) => (
                    <div key={idx}>
                      <ListSeats
                        alphabetSeat={seat}
                        handleSelectSeats={this.selectSeats}
                        soldSeats={this.state.soldSeats}
                        selectedSeats={this.state.selectSeats}
                      />
                    </div>
                  ))}
                  <NumberSeats
                    leftNumSeats={leftNumber}
                    rightNumSeats={rightNumber}
                  />
                </div>
              </div>
              <div class="row button__movie">
                <div class="col-sm-7">
                  <button
                    class="btn btn-outline-primary my-0 my-sm-0"
                    type="submit"
                  >
                    Change Your Movie
                  </button>
                </div>
                <div class="col-sm-4" style={{ marginBottom: "72px" }}>
                  <button
                    class="btn btn-outline-primary my-0 my-sm-0 btn_movie"
                    onClick={this.handleCheckout}
                  >
                    Check Out Now
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <h3>Order Info</h3>
              <div className="order">
                <div className="row text-center img__cinema">
                  <img src={cinema} alt="" />
                  <h3>CineOne21 Cinema</h3>
                </div>
                <div style={{ marginTop: "32px" }}>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>Movie Selected</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>{this.state.movieName}</h6>
                    </div>
                  </div>
                  <Row>
                    <Col>
                      <h6>{new Date(this.state.dateBooking).toDateString()}</h6>
                    </Col>
                    <Col>
                      <h6>{this.state.timeBooking}</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>One Ticket Price</h6>
                    </Col>
                    <Col>
                      <h6>${this.state.price}</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>Seat choosed</h6>
                    </Col>
                    <Col>
                      <>
                        <h6>
                          {" "}
                          {this.state.selectSeats.length === 0
                            ? "-"
                            : this.state.selectSeats.join(",")}
                        </h6>
                      </>
                    </Col>
                  </Row>
                  <hr className="my-4" />
                  <div class="row">
                    <div class="col-sm-6">
                      <h6>Total Payment</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6>
                        Rp.{this.state.price * this.state.selectSeats.length}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Order;
