import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
// eslint-disable-next-line no-unused-vars
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
      <>
        <div className="body__payment">
          <Header />
          <div style={{ marginButtom: "40px" }}>
            <Container>
              <Row>
                <Col sm={7}>
                  <div style={{ marginTop: "50px" }}>
                    <PaymentInfo paymentInfo={data} />
                  </div>
                </Col>
                <Col sm={4}>
                  <div style={{ marginTop: "50px" }}>
                    <PersonalInfo />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Footer />
        </div>
      </>
    );
  }
}

export default Payment;
