import React, { Component } from "react";
import "./index.css";
export class ListSeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSeats: [1, 2, 3, 4, 5, 6, 7],
      rightSeats: [8, 9, 10, 11, 12, 13, 14],
    };
  }

  componentDidMount() {
    this.setHandleSeats();
  }

  setHandleSeats = () => {
    const { alphabetSeat } = this.props;
    const leftSeats = this.state.leftSeats.map(
      (numSeat) => `${alphabetSeat}${numSeat}`
    );
    const rightSeats = this.state.rightSeats.map(
      (numSeat) => `${alphabetSeat}${numSeat}`
    );
    this.setState({
      leftSeats: leftSeats,
      rightSeats: rightSeats,
    });
  };
  render() {
    const { alphabetSeat, handleSelectSeats, soldSeats, selectedSeats } =
      this.props;
    console.log("seat sold=>", soldSeats);
    return (
      <>
        <div className="seat">
          <div className="row seat__row">
            {/* Sisi Pertama */}
            <div className="col seat__column seat__column-text">
              {alphabetSeat}
            </div>
            {/* Kolom Seat Pertama */}
            {this.state.leftSeats.map((num, idx) => (
              <div className="col seat__column" key={idx}>
                <div
                  className={`text-center ${
                    soldSeats.includes(num)
                      ? "seat_sold"
                      : selectedSeats.includes(num)
                      ? "seat_selected"
                      : "seat_available"
                  }`}
                  onClick={() => {
                    // eslint-disable-next-line no-unused-expressions
                    soldSeats.includes(num) ? null : handleSelectSeats(num);
                  }}
                ></div>
              </div>
            ))}
            {/* Pembaatas */}
            <div className="col seat__column"></div>
            {/* Kolom Seat Pertama akhir */}
            {this.state.rightSeats.map((num, idx) => (
              <div className="col seat__column" key={idx}>
                <div
                  className={`text-center ${
                    soldSeats.includes(num)
                      ? "seat_sold"
                      : selectedSeats.includes(num)
                      ? "seat_selected"
                      : "seat_available"
                  }`}
                  onClick={() => handleSelectSeats(num)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ListSeats;
