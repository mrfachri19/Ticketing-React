import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import cinema from "../../../assets/image/Vector-1.png";
import "./index.css";
import axios from "../../../utils/axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useTicked } from "../../../store/actions/user";
import { ToastContainer, toast } from "react-toastify";
import Profiluser from "../../../components/ProfileInfo";

export class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
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
        toast.success("Ticket di aktifkan...");
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
          <Row>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Profiluser />
              </Card>
            </Col>
            <Col sm={8}>
              <Row>
                <div className="navbar__profile">
                  <Nav>
                    <Nav.Item as="li">
                      <Link to="/profile">Account Settings</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Link to="/orderhistory">Order History</Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Row>
              <Row>
                <div className="orderbox">
                  <Row>
                    <Col sm={9}>
                      <p style={{ fontSize: "14px", color: "#4E4B66" }}>
                        Tuesday, 07 July 2021 - 4.30 PM
                      </p>
                      <h5 style={{ fontSize: "20px" }}>
                        Spiderman: Homecoming
                      </h5>
                    </Col>
                    <Col sm={3}>
                      <img
                        src={cinema}
                        style={{ width: "6rem", marginRight: "200px" }}
                        alt=""
                      />
                    </Col>
                  </Row>
                  <hr className="my-4" />
                  <Row>
                    <Col sm={9}>
                      <Button variant="primary" type="submit">
                        Ticket in Active
                      </Button>
                    </Col>
                    <Col sm={3}>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Movie Detail"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row>
                <div className="orderbox">
                  <Row>
                    <Col sm={9}>
                      <p style={{ fontSize: "14px", color: "#4E4B66" }}>
                        Tuesday, 07 July 2021 - 4.30 PM
                      </p>
                      <h5 style={{ fontSize: "20px" }}>
                        Spiderman: Homecoming
                      </h5>
                    </Col>
                    <Col sm={3}>
                      <img
                        src={cinema}
                        style={{ width: "6rem", marginRight: "200px" }}
                        alt=""
                      />
                    </Col>
                  </Row>
                  <hr className="my-4" />
                  <Row>
                    <Col sm={9}>
                      <Button variant="primary" type="submit">
                        Ticket in Active
                      </Button>
                    </Col>
                    <Col sm={3}>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Movie Detail"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
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
