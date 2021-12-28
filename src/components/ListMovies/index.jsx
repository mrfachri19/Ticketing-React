import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../utils/axios";

class ListMovies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      search: "",
      page: 1,
      limit: 10,
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
    // const { movies } = this.state;
    // const data = movies.filter((value) => value.id === id);
    // const detailData = data[0];
    // localStorage.setItem("nameMovie", detailData.name);
    this.props.history.push(`/detail/${id}`);
  };

  handleNotBookNow = () => {
    this.props.history.push("/");
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <section className="mt-4">
          <div className="row flex-nowrap movies__list--card-main">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div
                  className="movies__list--card col-sm-6 col-md-2 mx-3"
                  key={movie.id}
                >
                  <img
                    src={`http://localhost:3001/uploads/movie/${movie.image}`}
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
        </section>
      </>
    );
  }
}
export default withRouter(ListMovies);
