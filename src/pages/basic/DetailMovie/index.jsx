import React, { Component } from "react";
// import qs from "query-string";
import Navbar from "../../../components/Navbar";

const dateNow = new Date().toISOString().split("T")[0];
class DetailMovie extends Component {
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

  // getMovieDetail = () => {
  //   axios.get(`movie/${this.state.movieId}`).then().catch();
  // };
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
        this.props.history.push("/basic-order", {
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
    return (
      <div className="container text-center">
        <h1>DetailMovie Page</h1>
        <Navbar />
        <hr />
        <h6>DETAIL MOVIE</h6>
        <hr />
        <h6>List Schedule</h6>
        <input type="date" value={this.state.dateSchedule} onChange={this.handleChangeDate} />
        <hr />
        <div className="row">
          {this.state.dataSchedule.map((item) => (
            <div className="col-md-4" key={item.id}>
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
        </div>
      </div>
    );
  }
}

export default DetailMovie;
