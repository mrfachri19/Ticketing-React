import React, { Component } from "react";
import Header from "../../Header/index";
import Footer from "../../Footer/index";
import axios from "../../../utils/axios";
import "./index.css";
import banner from "../../../assets/image/Group 14.png";
import { Button, Col, Row, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      page: 1,
      limit: 20,
      isError: false,
      message: "",
    };
  }

  componentDidMount() {
    axios
      .get("movie", this.state.movies)
      .then((response) => {
        this.setState({
          movies: response.data.data,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
          message: error.response.data.message,
        });
      });
  }
  handleLinkDetailMovie = (id) => {
    const { movies } = this.state;
    const data = movies.filter((value) => value.id === id);
    const detailData = data[0];
    localStorage.setItem("nameMovie", detailData.name);
    this.props.history.push(`/detail/${id}`);
  };

  handleNotBookNow = () => {
    this.props.history.push("/");
  };

  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <div>
        <Header />
        <Container>
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
            <Row xs="auto">
              <Col sm={11}>
                <h4 className="text-left font-size-24 ">Now Showing</h4>
              </Col>
              <Col sm={1} className="view">
                <p>view all</p>
              </Col>
            </Row>
          </div>

          <div classNameName="row">
            <div className="kartu">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <div
                    className="movies__list--card col-sm-6 col-md-2 mx-3"
                    key={movie.id}
                  >
                    <img
                      src={`${
                        process.env.REACT_APP_NAME === "dev"
                          ? `${process.env.REACT_APP_DEV}uploads/movie/${movie.image}`
                          : `${process.env.REACT_APP_PROD}uploads/movie/${movie.image}`
                      }`}
                      className="movies__list-image img-fluid"
                      alt={movie.name}
                    />
                    <div className="movies__list--card-hover text-center">
                      <h2>{movie.name}</h2>
                      <p>{movie.category}</p>

                      <button
                        className="movies__list--card-hover-btn-details"
                        onClick={() => this.handleLinkDetailMovie(movie.id)}
                      >
                        Details
                      </button>
                      <button
                        className="movies__list--card-hover-btn"
                        onClick={this.handleNotBookNow}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center fs-2">Movies Not Found!</p>
              )}
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

          <Row>
            <div className="month__button">
              <Col>
                <Button variant="outline-primary" className="btn">
                  January
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  February
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  March
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  April
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  May
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  June
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  July
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  August
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  September
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  October
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  November
                </Button>
              </Col>
              <Col>
                <Button variant="outline-primary" className="btn">
                  December
                </Button>
              </Col>
            </div>
          </Row>

          <div className="row">
            <div className="kartu">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <div
                    className="movies__list--card col-sm-6 col-md-2 mx-3"
                    key={movie.id}
                  >
                    <img
                      src={`${
                        process.env.REACT_APP_NAME === "dev"
                          ? `${process.env.REACT_APP_DEV}uploads/movie/${movie.image}`
                          : `${process.env.REACT_APP_PROD}uploads/movie/${movie.image}`
                      }`}
                      className="movies__list-image img-fluid"
                      alt={movie.title}
                    />
                    <div className="movies__list--card-hover text-center">
                      <h2>{movie.name}</h2>
                      <p>{movie.category}</p>

                      <button
                        className="movies__list--card-hover-btn-details"
                        onClick={() => this.handleLinkDetailMovie(movie.id)}
                      >
                        Details
                      </button>
                      <button
                        className="movies__list--card-hover-btn"
                        onClick={this.handleNotBookNow}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center fs-2">Movies Not Found!</p>
              )}
            </div>
          </div>
          <Row>
            <div className="col-sm-12">
              <div className="moviegoers">
                <h2 className="text-center">
                  Be the vanguard of the <br /> <span>Moviegoers</span>{" "}
                </h2>
                <div className="form__control text-center">
                  <div className="d-block d-md-flex justify-content-center align-items-center mt-5 mr-5">
                    <input
                      type="text"
                      className="join__tickitz"
                      placeholder="Type your email"
                    />
                    <button className="btn btn-primary">Join Now</button>
                  </div>
                </div>
                <p className="text-center">
                  By joining you as a Tickitz member,
                  <br />
                  we will always send you the latest updates via email.
                </p>
              </div>
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
