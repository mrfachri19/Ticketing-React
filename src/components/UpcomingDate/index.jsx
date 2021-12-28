import React, { Component } from "react";

export class UpcommingDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcommingMovies: [],
      months: [
        "September",
        "October",
        "November",
        "December",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
    };
  }

  render() {
    const { months } = this.state;
    return (
      <>
        <div className="row flex-nowrap upcomming__movies--button-parent mt-4">
          {months.map((month, idx) => {
            const monthActive = new Date().toLocaleString("default", {
              month: "long",
            });
            const findMonth = months.filter((value) => value === monthActive);
            return (
              <div
                className="col-4 col-md-1 upcomming__movies-button-child"
                key={idx}
              >
                {month === findMonth[0] ? (
                  <button
                    className="upcomming__movies--button-active"
                    onClick={this.props.handleMonth}
                  >
                    {month}
                  </button>
                ) : (
                  <button
                    className="upcomming__movies--button"
                    onClick={this.props.handleMonth}
                  >
                    {month}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default UpcommingDate;
