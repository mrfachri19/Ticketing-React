import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  // Form,
  // InputGroup,
  // FormControl,
  Button,
} from "react-bootstrap";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import { Link } from "react-router-dom";
import "./index.css";
import PaymentInfo from "../../../components/PaymentInfo";
import PersonalInfo from "../../../components/PersonalInfo";

class Payment extends Component {
  constructor(props) {
    super();
    this.state = {
      movieId: props.location.state
        ? props.location.state.setDataPayment.movieId
        : "",
      scheduleId: props.location.state
        ? props.location.state.setDataPayment.scheduleId
        : "",
      dateBooking: props.location.state
        ? props.location.state.setDataPayment.dateBooking
        : "",
      timeBooking: props.location.state
        ? props.location.state.setDataPayment.timeBooking
        : "",
    };
  }
  componentDidMount() {
    if (
      !this.state.movieId ||
      !this.state.scheduleId ||
      !this.state.dateBooking ||
      !this.state.timeBooking
    ) {
      this.props.history.push("/");
    }
  }
  render() {
    const data = this.props.location.state
      ? this.props.location.state.setDataPayment
      : "";
    return (
      <div className="body__payment">
        <Header />
        <Container>
          <Row>
            <Col sm={7}>
              <h3 style={{ marginTop: "56px" }}>Payment Info</h3>
              <PaymentInfo paymentInfo={data} />
            </Col>
            <Col sm={4}>
              <h3>Personal Info</h3>
              <PersonalInfo />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Payment;
