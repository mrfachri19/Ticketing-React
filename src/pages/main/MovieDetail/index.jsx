import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../../../pages/Header";
import axios from "../../../utils/axios";
import "./index.css";
import Footer from "../../Footer/index";
import Premier1 from "../../../assets/image/Sponsor1.png";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data yang nnti akan di lempar ke page booking
      movies: [],
      id: this.props.match.params.movieId,
      isError: false,
      message: "",
      // ========================
      schedules: [],
      scheduleId: "",
      movieId: this.props.match.params.movieId,
      searchLocation: "",
      dateSchedule: new Date().toISOString().split("T")[0],
      timeSchedule: "",
      showSchedule: false,
      selectedTime: true,
      page: 1,
      limit: 1,
      pageInfo: [],
    };
  }

  componentDidMount() {
    // [1]
    // const urlParams = qs.parse(this.props.location.search);
    // console.log(urlParams);
    // [2]
    // console.log(this.props.location.state);
    // [3]
    console.log(this.props.match.params);
    this.getDetailMovie();
    this.getSchedule();
  }

  getDetailMovie = () => {
    axios
      .get(`movie/${this.state.id}`)
      .then((response) => {
        this.setState({
          movies: response.data.data[0],
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      });
  };

  getLocation = () => {
    axios
      .get("schedule", this.state.schedules)
      .then((response) => {
        const checkSchedule = response.data.data;
        const dataSchedule = checkSchedule.filter((value) => {
          return value.movieId === parseInt(this.state.movieId);
        });
        this.setState({
          schedules: dataSchedule,
        });
      })
      .catch((error) => {
        new Error(error.response);
      });
  };

  getSchedule = () => {
    axios
      .get(
        `schedule?searchMovieId=${this.state.movieId}&searchLocation=${this.state.searchLocation}&page=${this.state.page}&limit=${this.state.limit}&sort=price ASC`
      )
      .then((response) => {
        this.setState({
          schedules: response.data.data,
          pageInfo: response.data.pagination,
        });
      })
      .catch((error) => console.log(error.message));
  };

  handleLocation = (e) => {
    this.setState(
      {
        searchLocation: e.target.value,
        showSchedule: true,
      },
      () => {
        this.getSchedule();
      }
    );
  };

  handleDateSchedule = (event) => {
    this.setState({
      dateSchedule: event.target.value,
    });
  };
  handleTimeSchedule = (e, time) => {
    this.setState({
      timeSchedule: time,
      selectedTime: false,
    });
  };
  handleBookNow = (id) => {
    console.log(id);
    this.setState(
      {
        scheduleId: id,
      },
      () => {
        // proses pengecekan apakah time schedule itu udah di pick atau belum?
        const { movieId, scheduleId, dateSchedule, timeSchedule } = this.state;
        console.log(this.state.movieId);
        console.log(this.state.scheduleId);
        console.log(this.state.dateSchedule);
        console.log(this.state.timeSchedule);
        this.props.history.push("/order", {
          movieId,
          scheduleId,
          dateSchedule,
          timeSchedule,
        });
      }
    );
  };

  render() {
    const movie = this.state.movies;
    console.log(this.state.movies);
    const filterLocation = this.state.schedules
      .map((value) => value.location)
      .pop();
    const location = filterLocation === undefined ? null : filterLocation;
    console.log(this.state.schedules);

    return (
      <div>
        <Header />
        <Container>
          {movie ? (
            <>
              <section className="detail__movie">
                <section className="detail__movie--container">
                  <img
                    src={`${
                      process.env.REACT_APP_NAME === "dev"
                        ? `${process.env.REACT_APP_DEV}uploads/movie/${movie.image}`
                        : `${process.env.REACT_APP_PROD}uploads/movie/${movie.image}`
                    }`}
                    className="img-fluid detail__movie--image"
                    alt="Spiderman Movie"
                  />
                </section>
                <section className="detail__movie--desc">
                  <h2 className="fw-bold">{movie.name}</h2>
                  <p className="detail__movie--desc-subtitle">
                    {movie.category}
                  </p>
                  <div className="detail__movie--desc-mobile">
                    <div className="detail__movie--desc-child">
                      <span className="detail__movie-desc-title">
                        Release Date
                      </span>
                      <p>{new Date(movie.releaseDate).toDateString()}</p>
                    </div>
                    <div className="detail__movie--desc-child">
                      <span className="detail__movie-desc-title">Duration</span>
                      <p>{movie.duration}</p>
                    </div>
                    <div className="detail__movie--desc-child">
                      <span className="detail__movie-desc-title">
                        Directed by
                      </span>
                      <p>{movie.director}</p>
                    </div>
                    <div className="detail__movie--desc-child">
                      <span className="detail__movie-desc-title">Casts</span>
                      <p>{movie.cast}</p>
                    </div>
                  </div>
                </section>
                <hr className="detail__movie--line d-block d-md-none" />
              </section>
              <section className="detail_movie--desc-synopsis">
                <p className="fw-bold">Synopsis</p>
                <p className="detail__movie--desc-synopsis--paragraph ">
                  {movie.synopsis}
                </p>
              </section>
            </>
          ) : (
            <p className="fs-2 text-center fw-bold">Movie tidak ditemukan</p>
          )}
          <div className="row">
            <div className="col-sm-12 showtime">
              <h3>Showtimes and Tickets</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 offset-sm-3 dates kalender">
              <input
                type="date"
                value={this.state.dateSchedule}
                onChange={this.handleChangeDate}
              />
            </div>
            <div className="col-sm-3 dates">
              <select
                className="detail__schedule-input-city"
                name="searchLocation"
                onChange={this.handleLocation}
              >
                <option hidden>Set a City</option>
                <option value={location}>{location}</option>
              </select>
            </div>
          </div>

          <div className="row kartu1">
            <>
              {this.state.showSchedule && this.state.schedules.length > 0 ? (
                this.state.schedules.map((schedule) => {
                  const filterTime = schedule.time;
                  const newTime = filterTime.filter(
                    (value) => value === this.state.timeSchedule
                  );
                  const toStringTime = newTime.toString();
                  return schedule.movieId !== parseInt(this.state.movieId) ? (
                    <p className="fw-bold fs-2">Error</p>
                  ) : (
                    <div
                      key={schedule.id_schedule}
                      className={
                        toStringTime === this.state.timeSchedule
                          ? "d-block"
                          : "d-none"
                      }
                    >
                      <div className="detail__list_schedule-card position-relative">
                        <div className="detail__list_schedule-card-body">
                          <img
                            src={Premier1}
                            className="detail__list_schedule-card-image img-fluid"
                            alt={schedule.premiere}
                          />
                          <div className="detail__list_schedule-card-body-title">
                            <h5>{schedule.premiere}</h5>
                            <span>Whatever street No.12, South Purwokerto</span>
                          </div>
                        </div>
                        <hr className="position-absolute line-detail" />
                        <div className="detail__list_schedule-card-body-time">
                          {typeof schedule.time !== "object"
                            ? null
                            : schedule.time.map((timeSchedule, idx) => (
                                <span key={idx}>
                                  <button
                                    className="detail__list_schedule-card-button-time text-reset"
                                    onClick={(event) =>
                                      this.handleTimeSchedule(
                                        event,
                                        timeSchedule
                                      )
                                    }
                                  >
                                    {timeSchedule}
                                  </button>
                                </span>
                              ))}
                        </div>
                        <div className="detail__list_schedule-card-price">
                          <h5>Price</h5>
                          <h5>$10.00/seat</h5>
                        </div>
                        <button
                          type="button"
                          onClick={() => this.handleBookNow(schedule.id)}
                          className="detail__list_schedule-card-button"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="mx-auto fw-bold fs-4">Select Your Location!</p>
              )}
            </>
            {/* {this.state.pageInfo.totalPage ? (
              <SchedulePagination
                data={this.state.schedules}
                pageInfo={this.state.pageInfo}
                handleSchedule={this.handleSchedulePagination}
              />
            ) : null} */}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Detail;
