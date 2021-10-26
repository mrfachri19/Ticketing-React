import React, { Component } from "react";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import Cards from "../../../components/Card";
import axios from "../../../utils/axios";
import "./index.css";
import banner from "../../../assets/image/Group 14.png";
import lion from "../../../assets/image/Rectangle 119.1.png";
import widow from "../../../assets/image/Rectangle 139-4.png";
import { Button, Card, Col, Row, Form } from "react-bootstrap";

// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 6,
      pageInfo: {}
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  getDataMovie = () => {
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          data: res.data.data,
          pageInfo: res.data.pagination
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  handlePagination = (event) => {
    // console.log(event.selected + 1);
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handleDetail = (data) => {
    // [1] = bisa digunakan biasanya untuk url params
    // this.props.history.push(`/basic-detail?movieId=${data}`);
    // [2] = bisa digunakan jika data tidak mau ditampilkan di url
    // this.props.history.push("/basic-detail", { movieId: data });
    // [3] =bisa digunakan untuk detail product/data
    this.props.history.push(`/detail/${data}`);
    // console.log(data);
  };

  render() {
    // console.log(this.state.data);
    const { data } = this.state;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="newest__movie">
                <p>Nearest Cinema, Newest Movie,</p>
                <h1>Find out now!</h1>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="image__movie">
                <img src={banner} alt="group 14" />
              </div>
            </div>
          </div>
          <div className="now__showing">
            <div className="row">
              <div className="col-sm-11">
                <h4 className="text-left font-size-24 ">Now Showing</h4>
              </div>
              <div className="col-sm-1 view">
                <p>view all</p>
              </div>
            </div>
          </div>

          <div classNameName="row">
            <div className="kartu">
              <div className="border__card">
                <Card style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={lion} />
                  <Card.Body className="border__card-hover">
                    <Card.Title className="title">Lion King</Card.Title>
                    <Card.Text className="text">
                      <p>Action, Sci-fi, Adventure</p>
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="border__card">
                <Card style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={widow} />
                  <Card.Body className="border__card-hover">
                    <Card.Title className="title">Tenet</Card.Title>
                    <Card.Text className="text">
                      <p>Action, Sci-fi</p>
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="border__card">
                <Card style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={lion} />
                  <Card.Body className="border__card-hover">
                    <Card.Title className="title">Lion King</Card.Title>
                    <Card.Text className="text">
                      <p>Action, Sci-fi, Adventure</p>
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="border__card">
                <Card style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={lion} />
                  <Card.Body className="border__card-hover">
                    <Card.Title className="title">Lion King</Card.Title>
                    <Card.Text className="text">
                      <p>Action, Sci-fi, Adventure</p>
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="border__card">
                <Card style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={lion} />
                  <Card.Body className="border__card-hover">
                    <Card.Title className="title">Lion King</Card.Title>
                    <Card.Text className="text">
                      <p>Action, Sci-fi, Adventure</p>
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="border__card">
                <Card style={{ width: "13rem" }}>
                  <Card.Img variant="top" src={lion} />
                  <Card.Body className="border__card-hover">
                    <Card.Title className="title">Lion King</Card.Title>
                    <Card.Text className="text">
                      <p>Action, Sci-fi, Adventure</p>
                    </Card.Text>
                    <Button variant="primary">Detail</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <div className="upcoming__movie">
            <div className="row">
              <div className="col-sm-11">
                <h5 className="text-left">Upcoming Movie</h5>
              </div>
              <div className="col-sm-1">
                <p className="mr-auto">view all</p>
              </div>
            </div>
          </div>

          <div classNameName="month__buttons">
            <Button variant="outline-primary" className="btn">
              January
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              February
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              March
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              April
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              May
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              June
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              July
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              August
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              September
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              October
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              November
            </Button>{" "}
            <Button variant="outline-primary" className="btn">
              December
            </Button>
          </div>
          <div className="row">
            <div className="kartu">
              {data.map((item) => (
                <div className="border__card" key={item.id}>
                  <Cards data={item} handleDetail={this.handleDetail} />
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="moviegoers">
                <h2 className="text-center">
                  Be the vanguard of the <br /> <span>Moviegoers</span>{" "}
                </h2>
                <div className="form__control">
                  <Form>
                    <Row className="align-items-center">
                      <Col sm={3} className="my-1">
                        <Form.Control id="inlineFormInputName" placeholder="Type Your Email" />
                      </Col>
                      <Col xs="auto" className="my-1">
                        <Button type="submit">Submit</Button>
                      </Col>
                    </Row>
                  </Form>
                </div>

                <p className="text-center">
                  By joining you as a Tickitz member,
                  <br />
                  we will always send you the latest updates via email.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
