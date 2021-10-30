import React, { Component } from "react";
// import Seat from "../../../components/Seat";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import Header from "../../Header/index";
import cinema from "../../../assets/image/Vector-11.png";
import Footer from "../../Footer/index";

import "./indexorder.css";

class Order extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listSeat: ["A", "B", "C"],
  //     selectedSeat: [],
  //     reservedSeat: ["A1", "C7"],
  //     movieId: props.location.state ? props.location.state.movieId : "",
  //     scheduleId: props.location.state ? props.location.state.scheduleId : "",
  //     timeSchedule: props.location.state ? props.location.state.timeSchedule : "",
  //     dateSchedule: props.location.state ? props.location.state.dateSchedule : ""
  //   };
  // }

  // componentDidMount() {
  //   console.log(this.state);
  //   this.checkingData();
  // }

  // // checkingData = () => {
  // //   const { movieId, scheduleId, timeSchedule, dateSchedule } = this.state;
  // //   if (!movieId || !scheduleId || !timeSchedule || !dateSchedule) {
  // //     alert("Select Movie !");
  // //     this.props.history.push("/homepage");
  // //   }
  // // };

  // selectedSeat = (data) => {
  //   // console.log("user select seat");
  //   // console.log(data);
  //   if (this.state.selectedSeat.includes(data)) {
  //     const deleteSeat = this.state.selectedSeat.filter((el) => {
  //       return el !== data;
  //     });
  //     this.setState({
  //       selectedSeat: deleteSeat
  //     });
  //   } else {
  //     this.setState({
  //       selectedSeat: [...this.state.selectedSeat, data]
  //     });
  //   }
  // };

  // handleBooking = () => {
  //   if (this.state.selectedSeat.length < 1) {
  //     alert("Please Select Seat !");
  //   } else {
  //     const { movieId, scheduleId, dateSchedule, timeSchedule, selectedSeat } = this.state;
  //     const setData = {
  //       movieId,
  //       scheduleId,
  //       dateSchedule,
  //       timeSchedule,
  //       seat: selectedSeat
  //     };
  //     this.props.history.push("/payment", setData);
  //   }
  // };

  // handleResetBooking = () => {
  //   this.setState({
  //     selectedSeat: []
  //   });
  // };

  render() {
    // console.log(this.state.selectedSeat);
    return (
      <div>
        <Container>
          <Header />
          <Row>
            <Col sm={7}>
              <h3>Movie Selected</h3>
              <Row>
                <Navbar bg="light" variant="light" style={{ marginTop: "24px", width: "80%" }}>
                  <Container>
                    <Navbar.Brand href="#home">Spiderman: Homecoming</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Navbar.Text>
                        <Button variant="primary">Change Movie</Button>
                      </Navbar.Text>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Row>
              <div class="row" style={{ marginTop: "48px", marginBottom: "24px" }}>
                <h3>Choose Your Seat</h3>
              </div>
              <div class="row chooseseat" style={{ marginBottom: "40px" }}>
                <div class="seat">
                  <h5>Under Maintenance</h5>
                </div>
              </div>
              <div class="row button__movie">
                <div class="col-sm-6">
                  <button class="btn btn-outline-primary my-0 my-sm-0" type="submit">
                    Change Your Movie
                  </button>
                </div>
                <div class="col-sm-6" style={{ marginBottom: "72px" }}>
                  <button class="btn btn-outline-primary my-0 my-sm-0" type="submit">
                    Check Out Now
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <h3>Order Info</h3>
              <div className="order">
                <div className="row text-center">
                  <img src={cinema} alt="" />
                  <h3>CineOne21 Cinema</h3>
                </div>
                <div style={{ marginTop: "32px" }}>
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>Movie Selected</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>Spiderman</h6>
                    </div>
                  </div>
                  <Row>
                    <Col>
                      <h6>Tuesday, 07 July 2020</h6>
                    </Col>
                    <Col>
                      <h6>02:00pm</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>One Ticket Price</h6>
                    </Col>
                    <Col>
                      <h6>$10</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h6>Seat choosed</h6>
                    </Col>
                    <Col>
                      <h6>C4, C5, C6</h6>
                    </Col>
                  </Row>
                  <hr className="my-4" />
                  <div class="row">
                    <div class="col-sm-6">
                      <h6>Total Payment</h6>
                    </div>
                    <div class="col-sm-6">
                      <h6>$30</h6>
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
