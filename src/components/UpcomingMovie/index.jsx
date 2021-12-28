import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import DateMonth from "../UpcomingDate";
import { withRouter } from "react-router-dom";

class UpCommingMovies extends Component {
  constructor() {
    super();
    this.state = {
      upcommingMovies: [],
      dateMovies: new Date().toLocaleString("default", { month: "long" }),
      isError: false,
      message: "",
    };
  }

  componentDidMount() {
    this.defaultMonth();
    // eslint-disable-next-line no-unused-expressions
    this.handleMonth;
  }

  defaultMonth = () => {
    axios
      .get(`movie/upcomming?date=${this.state.dateMovies}`)
      .then((response) => {
        this.setState({
          upcommingMovies: response.data.data,
        });
      })
      .catch((error) => {
        new Error(error.response.data.message);
      });
  };

  handleMonth = (e) => {
    const month = e.target.outerText;
    axios
      .get(`movie/upcomming?date=${month}`)
      .then((response) => {
        this.setState({
          upcommingMovies: response.data.data,
          isError: false,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
          message: error.response.data.message,
        });
      });
  };

  handleDetail = (id) => {
    this.props.history.push(`/detail-movie/${id}`);
  };
  render() {
    return (
      <>
        <section className="upcomming__movies position-relative">
          {/* <!-- DATE UPCOMMING MOVIES --> */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="fw-bold title__nowshowing">Upcomming Movies</h4>
            </div>
            <div>
              <Link to="/" className="fw-bold allmovie__nowshowing">
                view all
              </Link>
            </div>
          </div>
          <DateMonth handleMonth={this.handleMonth} />
          {/* <!-- END DATE UPCOMMING MOVIES --> */}

          {/* <!-- LIST MOVIES UPCOMMING --> */}
          <div className="row flex-nowrap mt-5 upcomming__movies-list-main">
            {this.state.isError ? (
              <p className="text-center fs-2">Not movie yet 🥺</p>
            ) : (
              this.state.upcommingMovies.map((movie) => (
                <div
                  className="col-sm-6 col-md-2 upcomming__movies-list text-center"
                  key={movie.id}
                >
                  <img
                    src={`http://localhost:3001/uploads/movie/${movie.image}`}
                    alt="Movies Upcomming"
                    className="upcomming__movies--image img-fluid"
                  />
                  <p className="fw-bold mt-3">{movie.name}</p>
                  <span className="upcomming__movies--desc text-muted">
                    {movie.category}
                  </span>
                  <button
                    className="upcomming__movies--button-details"
                    onClick={() => this.handleDetail(movie.id)}
                  >
                    Details
                  </button>
                </div>
              ))
            )}
          </div>
          {/* <!-- END LIST MOVIES UPCOMMING --> */}
        </section>
      </>
    );
  }
}
export default withRouter(UpCommingMovies);
