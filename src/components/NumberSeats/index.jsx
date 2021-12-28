import React, { Component } from "react";
import "./index.css";
export class NumberSeats extends Component {
  render() {
    return (
      <>
        <div className="row nums_row">
          <div className="col-md"></div>
          {this.props.leftNumSeats.map((numLeft, idx) => (
            <div className="col-md text-center nums_col-text" key={idx}>
              {numLeft}
            </div>
          ))}

          <div className="col-md text-center nums_col-text"></div>
          {this.props.rightNumSeats.map((numRight, idx) => (
            <div className="col-md text-center nums_col-text" key={idx}>
              {numRight}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default NumberSeats;
