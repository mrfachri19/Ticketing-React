import React, { Component } from "react";
import Seat from "../../../components/Seat";
import "./index.css";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSeat: ["A", "B", "C"],
      selectedSeat: [],
      reservedSeat: ["A1", "C7"],
      movieId: props.location.state ? props.location.state.movieId : "",
      scheduleId: props.location.state ? props.location.state.scheduleId : "",
      timeSchedule: props.location.state ? props.location.state.timeSchedule : "",
      dateSchedule: props.location.state ? props.location.state.dateSchedule : ""
    };
  }

  componentDidMount() {
    console.log(this.state);
    this.checkingData();
  }

  checkingData = () => {
    const { movieId, scheduleId, timeSchedule, dateSchedule } = this.state;
    if (!movieId || !scheduleId || !timeSchedule || !dateSchedule) {
      alert("Select Movie !");
      this.props.history.push("/homepage");
    }
  };

  selectedSeat = (data) => {
    // console.log("user select seat");
    // console.log(data);
    if (this.state.selectedSeat.includes(data)) {
      const deleteSeat = this.state.selectedSeat.filter((el) => {
        return el !== data;
      });
      this.setState({
        selectedSeat: deleteSeat
      });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, data]
      });
    }
  };

  handleBooking = () => {
    if (this.state.selectedSeat.length < 1) {
      alert("Please Select Seat !");
    } else {
      const { movieId, scheduleId, dateSchedule, timeSchedule, selectedSeat } = this.state;
      const setData = {
        movieId,
        scheduleId,
        dateSchedule,
        timeSchedule,
        seat: selectedSeat
      };
      this.props.history.push("/payment", setData);
    }
  };

  handleResetBooking = () => {
    this.setState({
      selectedSeat: []
    });
  };

  render() {
    console.log(this.state.selectedSeat);
    return (
      <div className="container text-center">
        <h1>Order Page</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                {this.state.listSeat.map((item, index) => (
                  <div key={index}>
                    <Seat
                      seatAlphabhet={item}
                      selectedSeat={this.selectedSeat}
                      reserved={this.state.reservedSeat}
                      selected={this.state.selectedSeat}
                    />
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" onClick={this.handleBooking}>
                Booking
              </button>
              <button className="btn btn-danger" onClick={this.handleResetBooking}>
                Reset Seat
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">ORDER DETAIL</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
