import React, { Component } from "react";
// import qs from "query-string";
import { Image, Container } from "react-bootstrap";
import Header from "../../../pages/Header";
import axios from "../../../utils/axios";
import vektor from "../../../assets/image/Vector13.png";
import "./index.css";
import Footer from "../../Footer/index";

const dateNow = new Date().toISOString().split("T")[0];
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data yang nnti akan di lempar ke page booking
      movieId: props.match.params.movieId,
      scheduleId: "",
      timeSchedule: "",
      dateSchedule: dateNow,
      // ========================
      dataSchedule: [
        {
          id: 1,
          premiere: "Ebu.id",
          location: "Jakarta",
          price: 50,
          time: ["10:00", "12:00"],
          dateStart: "2021-02-02",
          dateEnd: "2021-03-03"
        },
        {
          id: 2,
          premiere: "CineOne",
          location: "Jakarta",
          price: 50,
          time: ["13:00", "15:00"],
          dateStart: "2021-02-02",
          dateEnd: "2021-03-03"
        }
      ],
      dataDetailMovie: []
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
    this.getMovieDetail();
  }

  getMovieDetail = () => {
    axios
      .get(`movie/${this.state.movieId}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          dataDetailMovie: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  handleChangeDate = (event) => {
    // if (condition jika user memilih tanggal hari sebelumnya) {
    //   console.log("tanggal tidak bisa di akses");
    // }
    this.setState(
      {
        dateSchedule: event.target.value
      },
      () => {
        // proses function get schedule
      }
    );
  };

  handleBooking = (data) => {
    this.setState(
      {
        scheduleId: data
      },
      () => {
        // proses pengecekan apakah time schedule berada di dalam list time schedule
        const { movieId, scheduleId, dateSchedule, timeSchedule } = this.state;
        // console.log(this.state.movieId);
        // console.log(this.state.scheduleId);
        // console.log(this.state.dateSchedule);
        // console.log(this.state.timeSchedule);
        this.props.history.push("", {
          movieId,
          scheduleId,
          dateSchedule,
          timeSchedule
        });
      }
    );
  };

  handleTimeSchedule = (data) => {
    // console.log(data);
    alert("You Click Time " + data);
    this.setState({
      timeSchedule: data
    });
  };

  render() {
    const { dataDetailMovie } = this.state;
    console.log(this.state.dataDetailMovie);
    return (
      <div>
        <Header />
        <Container>
          <div className="row cards">
            <div className="col-sm-3">
              <div className="card__image">
                <div className="border__card">
                  {dataDetailMovie.length > 0 && <Image src={dataDetailMovie[0].image} />}
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-12 h1">
                  {dataDetailMovie.length > 0 && (
                    <>
                      <h1>{dataDetailMovie[0].name}</h1>
                      <p>{dataDetailMovie[0].category}</p>
                    </>
                  )}
                </div>
              </div>
              <div className="row h2">
                <div className="col-sm-4">
                  <p>Realesed date</p>
                  <h6>June 28, 2017</h6>
                </div>
                <div className="col-sm-8">
                  <p>Directed By</p>
                  <h6>Jhon Watss</h6>
                </div>
              </div>
              <div className="row h3">
                <div className="col-sm-4">
                  <p>Durations</p>
                  <h6>2 Hours 13 Minutes</h6>
                </div>
                <div className="col-sm-8">
                  <p>Cast</p>
                  <h6>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h6>
                </div>
              </div>
              <hr className="my-4" />
              <div className="sinopsis">
                <h2>Synopsis</h2>
                <p className="text-justify">
                  Thrilled by his experience with the Avengers, Peter returns home, where he lives
                  with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter
                  tries to fall back into his normal daily routine - distracted by thoughts of
                  proving himself to be more than just your friendly neighborhood Spider-Man - but
                  when the Vulture emerges as a new villain, everything that Peter holds most
                  important will be threatened.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 showtime">
              <h3>Showtimes and Tickets</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 offset-sm-3 dates kalender">
              <input type="date" value={this.state.dateSchedule} onChange={this.handleChangeDate} />
            </div>
            <div className="col-sm-3 dates">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  <i className="fas fa-map-marker-alt mr-3"></i> Location
                </button>
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-divider"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row kartu1">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 kartu1">
                      <img src={vektor} alt="" />
                    </div>
                    <div className="col-sm-8">
                      <h6>ebv.id</h6>
                      <p>
                        Whatever street No.12, <br /> South Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>Price</p>
                    </div>
                    <div className="col-sm-6">
                      <h6>$10.00/seat</h6>
                    </div>
                  </div>

                  <div className="row">
                    <button className="btn btn-primary" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 kartu1">
                      <img src={vektor} alt="" />
                    </div>
                    <div className="col-sm-8">
                      <h6>ebv.id</h6>
                      <p>
                        Whatever street No.12, <br /> South Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>Price</p>
                    </div>
                    <div className="col-sm-6">
                      <h6>$10.00/seat</h6>
                    </div>
                  </div>

                  <div className="row">
                    <button className="btn btn-primary" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 kartu1">
                      <img src={vektor} alt="" />
                    </div>
                    <div className="col-sm-8">
                      <h6>ebv.id</h6>
                      <p>
                        Whatever street No.12, <br /> South Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>Price</p>
                    </div>
                    <div className="col-sm-6">
                      <h6>$10.00/seat</h6>
                    </div>
                  </div>

                  <div className="row">
                    <button className="btn btn-primary" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row kartu2">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 kartu1">
                      <img src={vektor} alt="" />
                    </div>
                    <div className="col-sm-8">
                      <h6>ebv.id</h6>
                      <p>
                        Whatever street No.12, <br /> South Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>Price</p>
                    </div>
                    <div className="col-sm-6">
                      <h6>$10.00/seat</h6>
                    </div>
                  </div>

                  <div className="row">
                    <button className="btn btn-primary" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 kartu1">
                      <img src={vektor} alt="" />
                    </div>
                    <div className="col-sm-8">
                      <h6>ebv.id</h6>
                      <p>
                        Whatever street No.12, <br /> South Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>Price</p>
                    </div>
                    <div className="col-sm-6">
                      <h6>$10.00/seat</h6>
                    </div>
                  </div>

                  <div className="row">
                    <button className="btn btn-primary" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 kartu1">
                      <img src={vektor} alt="" />
                    </div>
                    <div className="col-sm-8">
                      <h6>ebv.id</h6>
                      <p>
                        Whatever street No.12, <br /> South Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                    <div className="col-sm-3">
                      <p>08:30</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <p>Price</p>
                    </div>
                    <div className="col-sm-6">
                      <h6>$10.00/seat</h6>
                    </div>
                  </div>

                  <div className="row">
                    <button className="btn btn-primary" type="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row tombols">
            <div className="col-sm-12 tombol">
              <button type="button" className="btn btn-outline-primary">
                1
              </button>
              <button type="button" className="btn btn-outline-primary">
                2
              </button>
              <button type="button" className="btn btn-outline-primary">
                3
              </button>
              <button type="button" className="btn btn-outline-primary">
                4
              </button>
            </div>
          </div>

          {/* <hr />
        <h6>List Schedule</h6>
        <input type="date" value={this.state.dateSchedule} onChange={this.handleChangeDate} />
        <hr /> */}
          {/* <div classNameName="row">
          {this.state.dataSchedule.map((item) => (
            <div classNameName="col-md-4" key={item.id}>
              <h4>{item.premiere}</h4>
              <hr />
              {item.time.map((itemTime, index) => (
                <button key={index} onClick={() => this.handleTimeSchedule(itemTime)}>
                  {itemTime}
                </button>
              ))}
              <br />
              <br />
              <button onClick={() => this.handleBooking(item.id)}>Booking Now</button>
            </div>
          ))}
        </div> */}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Detail;
