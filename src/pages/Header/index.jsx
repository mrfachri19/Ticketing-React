import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import elips from "../../assets/image/Ellipse 11.png";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import tiket from "../../assets/image/Vector.png";
import { Link, withRouter } from "react-router-dom";
import axios from "../../utils/axios";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      searchMenu: false,
      show: false,
      search: "",
      movies: [],
      isError: false,
      message: "",
      role: localStorage.getItem("role"),
    };
  }
  handleProfile = () => {
    if (!this.state.show) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  };
  handleSignUp = () => {
    this.props.history.push("/register");
  };
  handleSearch = () => {
    this.setState({
      searchMenu: true,
    });
  };
  handleSearchMovie = (event) => {
    axios
      .get(`/movie?search=${this.state.search}`)
      .then((response) => {
        // const movies = response.data.data.map((value) => value.title);
        this.setState({
          movies: response.data.data,
          isError: false,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
          message: error.response.data.message,
        });
      });
    this.setState({
      search: event.target.value,
    });
  };
  handleDetailMovie = (id) => {
    this.props.history.push(`/detail-movie/${id}`);
  };
  handleLogout = () => {
    localStorage.clear();
    alert("Success Logout!");
    this.props.history.push("/login");
  };
  render() {
    const token = localStorage.getItem("token");

    // console.log(this.props);
    // console.log(this.state);
    return (
      <Container>
        <Navbar bg="white" expand="sm" className="nav__brand">
          <Navbar.Brand className="navbar__tiket">
            <img src={tiket} alt="ticketz 1" />
            <Navbar.Toggle
              className="nav__brand"
              aria-controls="responsive-navbar-nav"
            />
          </Navbar.Brand>

          <Navbar.Collapse
            className="nav justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="me-auto">
              {this.state.role !== "admin" ? (
                <>
                  <Link to="/" className="d-none d-md-inline-block mx-5">
                    Home
                  </Link>
                  <Link to="/payment" className="mx-4 d-none d-md-inline-block">
                    Payment
                  </Link>
                  <Link to="/profile" className="mx-4 d-none d-md-inline-block">
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/admin/dashboard"
                    className="d-none d-md-inline-block mx-5"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/admin/manage-movie"
                    className="mx-4 d-none d-md-inline-block"
                  >
                    Manage Movie
                  </Link>
                  <Link
                    to="/admin/manage-schedule"
                    className="mx-4 d-none d-md-inline-block"
                  >
                    Manage Schedule
                  </Link>
                </>
              )}
            </Nav>
            <Nav className="justify-content-end ">
              <NavDropdown
                title="Location"
                className="justify-content-end"
                style={{ marginRight: "30px" }}
              >
                <NavDropdown.Item href="#action/3.1">Jakarta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Medan </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Yogyakarta
                </NavDropdown.Item>
              </NavDropdown>
              <button
                onClick={this.handleSearch}
                style={{
                  marginRight: "40px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                {this.state.searchMenu ? (
                  <>
                    <input
                      type="text"
                      className="form-control d-none d-md-block"
                      placeholder="Search Movie"
                      onChange={this.handleSearchMovie}
                    />
                    {this.state.search ? (
                      <div className="navigation__homepage-search-movie">
                        <p className="text-dark fw-bold">
                          Search: {this.state.search}
                        </p>
                        {this.state.isError ? (
                          <p className="text-dark fw-bold mx-5">
                            {this.state.message}
                          </p>
                        ) : (
                          this.state.movies.map((movie) => (
                            <div key={movie.id}>
                              <button
                                className="navigation__homepage-search-movie-link text-decoration-none "
                                onClick={() => this.handleDetailMovie(movie.id)}
                              >
                                {movie.name}
                              </button>
                            </div>
                          ))
                        )}
                        <hr />
                      </div>
                    ) : null}
                  </>
                ) : (
                  <FontAwesomeIcon
                    icon={faSearch}
                    onClick={this.handleSearch}
                  />
                )}
              </button>
              <div className="mx-3 d-none d-md-inline-flex">
                {token !== null ? (
                  <img
                    src={elips}
                    className="img-fluid w-50"
                    alt="Profile"
                    onClick={this.handleProfile}
                  />
                ) : (
                  <button
                    type="button"
                    className="navbar__button btn btn-primary"
                    style={{ marginRight: "40px" }}
                    onClick={this.handleSignUp}
                  >
                    Sign Up
                  </button>
                )}
              </div>
              {this.state.show ? (
                <button
                  onClick={this.handleLogout}
                  type="button"
                  className="navbar__button btn btn-primary"
                  style={{ marginRight: "40px" }}
                >
                  logout
                </button>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default withRouter(Header);
