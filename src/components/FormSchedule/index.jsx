/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
// import ManageMovie from "../../assets/img/movies3.png";
import Premier1 from "../../assets/image/Sponsor1.png";
import Premier2 from "../../assets/image/Sponsor2.png";
import Premier3 from "../../assets/image/Sponsor3.png";
import Plus from "../../assets/image/plus.svg";
import { connect } from "react-redux";
import {
  postPremiere,
  getAllPremiere,
  updatePremiere,
} from "../../store/actions/premiere";
import { getAllMovie } from "../../store/actions/movie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class FormSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImage: "",
      dataMovies: props.movie,
      dataPremiere: "",
      selectTime: [],
      isUpdate: false,
      isDisabled: false,
      isActive: false,
      isShow: false,
      isError: false,
      message: "",
      form__schedule: {
        location: "",
        movieId: "",
        price: "",
        dateStart: "",
        dateEnd: "",
        premiere: "",
        time: "",
      },
    };
  }

  handleUpdateNewPremiere = (event) => {
    event.preventDefault();
    const id = this.state.form__schedule.id_schedule;
    const newTime = this.state.selectTime.toString();
    const data = this.state.form__schedule;
    const newData = {
      ...data,
      premiere: this.state.dataPremiere,
      time: newTime,
    };
    delete newData.createdAt;
    this.props
      .updatePremiere(newData, id)
      .then(() => {
        this.setState({
          isUpdate: false,
          selectTime: [],
          form__schedule: {
            location: "",
            movieId: "",
            price: "",
            dateStart: "",
            dateEnd: "",
            premiere: "",
            time: "",
          },
        });
        toast.success("Schedule berhasil di update");
        this.props.getAllPremiere(1, 20);
      })
      .catch(() => {
        toast.error("Silahkan ubah data yang baru!");
      });
  };

  handleSubmitPremiere = (event) => {
    event.preventDefault();
    const newTime = this.state.selectTime;
    const { movieId, location, price, dateStart, dateEnd } =
      this.state.form__schedule;
    const setDataPremiere = {
      movieId: movieId,
      location,
      price,
      dateStart,
      dateEnd,
      premiere: this.state.dataPremiere,
      time: newTime.toString(),
    };
    // for (const data in setDataPremiere) {
    //   if (setDataPremiere[data] === "") {
    //     toast.error("Lengkapi form yang kosong!");
    //     return false;
    //   }
    // }
    this.props.postPremiere(setDataPremiere).then(() => {
      this.setState({
        selectTime: [],
        form__schedule: {
          location: "",
          movieId: "",
          price: "",
          dateStart: "",
          dateEnd: "",
          premiere: "",
          time: [],
        },
      });
      toast.success("Schedule berhasil di tambahkan!");
      event.target.reset();
      this.props.getAllPremiere(1, 20);
    });
  };

  handleChangeInput = (event, image) => {
    this.setState({
      form__schedule: {
        ...this.state.form__schedule,
        [event.target.name]: event.target.value,
      },
    });
  };
  getValueImage = (text) => {
    this.setState({
      isActive: true,
      dataPremiere: text,
    });
  };

  componentDidMount() {
    this.props.getAllMovie(1, 20, "name ASC");
  }

  handleFormTime = () => {
    this.setState({
      isShow: true,
    });
  };
  handleAddedTime = (event) => {
    if (event.key === "Enter") {
      if (this.state.form__schedule.time) {
        this.setState({
          selectTime: [...this.state.selectTime, event.target.value],
          isShow: false,
        });
      } else {
        this.setState({
          selectTime: [...this.state.selectTime, event.target.value],
          isShow: false,
        });
      }
    }
  };

  componentDidUpdate() {
    if (this.props.setUpdate) {
      this.props.handleSetUpdate();
      this.setState({
        isUpdate: true,
        form__schedule: {
          ...this.state.form__schedule,
          ...this.props.premiere.data,
        },
      });
    }
  }
  handleReset = () => {
    this.setState({
      isUpdate: false,
      selectTime: [],
      form__schedule: {
        location: "",
        movieId: "",
        price: "",
        dateStart: "",
        dateEnd: "",
        premiere: "",
        time: [],
      },
    });
    toast.warning("Reset Form...");
    return true;
  };

  render() {
    console.log(this.state.isUpdate ? "Update" : "Submit");

    const { dateStart, dateEnd } = this.state.form__schedule;
    const newDateStart = dateStart.split("T")[0];
    const newDateEnd = dateEnd.split("T")[0];
    const sameFilm = this.state.dataMovies.movies.filter((value) =>
      value.id === this.state.form__schedule.movieId ? value.name : ""
    );
    return (
      <>
        <h5 className="manage__schedule-form-title">Form Schedule</h5>
        <section className="manage__schedule-form">
          <ToastContainer />
          <form
            onSubmit={
              this.state.isUpdate
                ? this.handleUpdateNewPremiere
                : this.handleSubmitPremiere
            }
          >
            <div className="manage__schedule-form-card">
              <div className="manage__schedule-form-card-body">
                {/* <img src={ManageMovie} className="img-fluid" alt="Movies" /> */}
              </div>
              <div className="row manage__schedule-form-card-row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="movie">Movie</label>
                  <select
                    className="manage__schedule-form-card-input"
                    name="movieId"
                    onChange={this.handleChangeInput}
                  >
                    <option hidden>
                      {this.state.form__schedule.movieId
                        ? sameFilm.map((value) => value.name)
                        : "Select Movie"}
                    </option>
                    {this.state.dataMovies.movies.length > 0 ? (
                      this.state.dataMovies.movies.map((value) => {
                        return (
                          <>
                            <option
                              value={
                                this.state.form__schedule.movieId
                                  ? this.state.form__schedule.movieId
                                  : value.id
                              }
                              key={value.id}
                            >
                              {value.name}
                            </option>
                          </>
                        );
                      })
                    ) : (
                      <option hidden>movie not found!</option>
                    )}
                  </select>
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="location">Location</label>
                  <select
                    className="manage__schedule-form-card-input"
                    name="location"
                    onChange={this.handleChangeInput}
                  >
                    <option hidden>
                      {this.state.form__schedule.location
                        ? this.state.form__schedule.location
                        : "Select Location"}
                    </option>
                    {this.props.dataLocation.length > 0 ? (
                      this.props.dataLocation.map((value) => {
                        return (
                          <>
                            <option value={value.nama} key={value.id}>
                              {value.nama}
                            </option>
                          </>
                        );
                      })
                    ) : (
                      <option hidden>location not found!</option>
                    )}
                  </select>
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="price" name="price">
                    Price
                  </label>
                  <input
                    type="text"
                    className="manage__schedule-form-card-input"
                    placeholder="10"
                    name="price"
                    id="price"
                    onChange={this.handleChangeInput}
                    value={this.state.form__schedule.price}
                  />
                </div>
                <div className="col-md-3 mb-4" name="dateStart">
                  <label htmlFor="DateStart">Date Start</label>
                  <input
                    type="date"
                    className="manage__schedule-form-card-input"
                    name="dateStart"
                    onChange={this.handleChangeInput}
                    value={newDateStart}
                  />
                </div>
                <div className="col-md-3 mb-4" name="dateEnd">
                  <label htmlFor="DateEnd">Date End</label>
                  <input
                    type="date"
                    className="manage__schedule-form-card-input"
                    name="dateEnd"
                    onChange={this.handleChangeInput}
                    value={newDateEnd}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Premiere" className="mt-2 mb-0">
                    Premiere
                  </label>
                  <div className="manage__schedule-form-card-premiere">
                    <img
                      src={Premier1}
                      className="manage__shcedule-form-card-image"
                      alt="Hiflix"
                      onClick={() => this.getValueImage("Hiflix")}
                    />
                    <img
                      src={Premier2}
                      className="manage__shcedule-form-card-image"
                      alt="Ebv.id"
                      onClick={() => this.getValueImage("Ebv.id")}
                    />
                    <img
                      src={Premier3}
                      className="manage__shcedule-form-card-image"
                      alt="CineOne21"
                      onClick={() => this.getValueImage("CineOne21")}
                    />
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="time">Time</label>
                  <div className="row manage__schedule-form-card-time">
                    <div className="col-md-3">
                      <div className="manage__schedule-form-card-time-button-parent">
                        {this.state.isShow ? (
                          this.state.form__schedule.time ? (
                            <input
                              type="text"
                              onKeyPress={this.handleAddedTime}
                              name="time"
                              className="form-control"
                              // style={{ width: "200px" }}
                            />
                          ) : (
                            <input
                              type="text"
                              onKeyPress={this.handleAddedTime}
                              name="time"
                              className="form-control w-100"
                            />
                          )
                        ) : (
                          <button
                            className="manage__schedule-form-card-time-button"
                            onClick={this.handleFormTime}
                          >
                            <img src={Plus} className="img-fluid" alt="Plus" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="manage__schedule-form-card-time-select-time-column">
                      {this.state.selectTime.map((value, index) => (
                        <div className="col-md-3" key={index}>
                          <div
                            className="manage__schedule-form-card-time-select-time"
                            style={{ cursor: "default" }}
                          >
                            {this.state.form__schedule.time
                              ? this.state.selectTime.map((item) => item)
                              : value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4 manage__schedule-form-card-button-column">
                    <button
                      className="manage__schedule-form-card-button-reset mx-1"
                      onClick={this.handleReset}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="manage__schedule-form-card-button-submit manage__schedule-form-card-button-disabled"
                    >
                      {this.state.isUpdate ? "Update" : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
  premiere: state.premiere,
});

const mapDispatchToProps = {
  updatePremiere,
  postPremiere,
  getAllMovie,
  getAllPremiere,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSchedule);
