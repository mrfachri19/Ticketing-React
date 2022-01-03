/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import Hiflix from "../../../assets/image/Sponsor1.png";
import EbvId from "../../../assets/image/Sponsor2.png";
import CineOne21 from "../../../assets/image/Sponsor1.png";
import { withRouter } from "react-router-dom";
import {
  getAllPremiere,
  deletePremiere,
  setUpdate,
  searchPremiere,
} from "../../../store/actions/premiere";
import { getAllMovie } from "../../../store/actions/movie";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";
import FormSchedule from "../../../components/FormSchedule/index";
import "./index.css";

class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      premiere: props.premieres.premiere,
      page: 2,
      limit: 3,
      dataLocation: [],
      setUpdate: false,
      isUpdate: false,
      totalPage: props.premieres.pageInfo.totalPage,
      sort: "",
      movieId: "",
      location: "",
      dataMovie: [],
    };
  }
  getPremiere = () => {
    this.props
      .getAllPremiere(this.state.page, this.state.limit)
      .then((response) => {
        this.setState({
          premiere: response.value.data.data,
        });
      });
  };
  componentDidMount() {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      this.props.history.push("/");
    }
    this.getPremiere();
    this.getLocation();
    this.listMovie();
  }
  handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage,
      },
      () => {
        this.props.history.push(
          `/manageschedule?page=${this.state.page}&limit=${this.state.limit}`
        );
        this.getPremiere();
      }
    );
  };
  handleDeleteSchedule = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const userClicked = confirm("Premiere akan di hapus, anda yakin?");
    if (userClicked) {
      this.props.deletePremiere(id).then(() => {
        toast.success("Premiere berhasil di hapus");
        this.props.getAllPremiere(1, 20).then((response) => {
          this.setState({
            premiere: response.value.data.data,
          });
        });
      });
    } else {
      toast.error("Batal menghapus premiere");
      return false;
    }
  };
  handleUpdateSchedule = (data, id) => {
    this.props.setUpdate(data, id);
    this.handleSetUpdate();
  };
  handleSetUpdate = () => {
    this.setState({
      setUpdate: !this.state.setUpdate,
    });
  };
  getLocation = async () => {
    try {
      const response = await axios.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      this.setState({
        dataLocation: response.data.provinsi,
      });
    } catch (error) {
      new Error(error.message);
    }
  };
  listMovie = () => {
    this.props
      .getAllMovie(this.state.page, this.state.limit, "name ASC")
      .then((response) => {
        this.setState({
          dataMovie: response.value.data.data,
        });
      })
      .catch((error) => new Error(error.message));
  };
  handleSort = (event) => {
    this.props
      .searchPremiere(
        this.state.movieId,
        this.state.location,
        this.state.page,
        this.state.limit,
        event.target.value
      )
      .then((response) => {
        this.setState(
          {
            sort: event.target.value,
          },
          () => {
            this.props.premieres.premiere = response.value.data.data;
            // eslint-disable-next-line no-unused-expressions
            this.handlePagination;
          }
        );
        this.props.history.push(`/manageschedule?sort=${event.target.value}`);
        this.props.premieres.premiere = response.value.data.data;
      })
      .catch((error) => new Error(error));
  };
  handleSearchLocation = (event) => {
    this.props
      .searchPremiere(
        this.state.movieId,
        event.target.value,
        this.state.page,
        this.state.limit,
        ""
      )
      .then((response) => {
        // console.log(response.value.data.data);
        this.setState(
          {
            location: event.target.value,
          },
          () => {
            this.props.premieres.premiere = response.value.data.data;
            // eslint-disable-next-line no-unused-expressions
            this.handlePagination;
          }
        );
        this.props.history.push(
          `/manageschedule?location=${event.target.value}`
        );
        this.props.premieres.premiere = response.value.data.data;
      })
      .catch(() => {
        toast.error(
          `Schedule di Lokasi ${event.target.value} tidak ditemukan!`
        );
        this.props.getAllPremiere(1, 20);
      });
  };
  handleSearchMovie = (event) => {
    this.props
      .searchPremiere(
        event.target.value,
        this.state.location,
        this.state.page,
        this.state.limit,
        "price ASC"
      )
      .then((response) => {
        this.setState(
          {
            movieId: event.target.value,
          },
          () => {
            this.props.premieres.premiere = response.value.data.data;
            // eslint-disable-next-line no-unused-expressions
            this.handlePagination;
          }
        );
        this.props.history.push(
          `/manageschedule?movieId=${event.target.value}`
        );
        this.props.premieres.premiere = response.value.data.data;
      })
      .catch(() => {
        toast.error("Movie not found!");
        this.props.getAllPremiere(1, 20);
      });
  };
  render() {
    return (
      <div>
        <Header />
        <Container>
          <main className="manage__schedule">
            <FormSchedule
              setUpdate={this.state.setUpdate}
              handleSetUpdate={this.handleSetUpdate}
              dataLocation={this.state.dataLocation}
            />
            <div className="manage__schedule-container">
              <h3>Data Schedule</h3>
              <ToastContainer />
              <div className="manage__schedule-search">
                <select
                  className="manage__schedule-form"
                  onChange={this.handleSort}
                >
                  <option hidden>Sort</option>
                  <option value="ASC">$10 - $100</option>
                  <option value="DESC">$100 - $10</option>
                </select>
                <select
                  className="manage__schedule-form"
                  onChange={this.handleSearchLocation}
                >
                  <option hidden>Location</option>
                  {this.state.dataLocation.length > 0 ? (
                    this.state.dataLocation.map((value) => {
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
                <select
                  className="manage__schedule-form"
                  onChange={this.handleSearchMovie}
                >
                  <option hidden>Movie</option>
                  {this.state.dataMovie.map((movie) => (
                    <>
                      <option value={movie.id} key={movie.id}>
                        {movie.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>
            </div>
            <section className="row manage__schedule-list mt-5">
              {this.state.premiere.length > 0 ? (
                this.props.premieres.premiere.map((value) => {
                  return (
                    <div
                      className="col-md-3 m-3 manage__schedule-list-card"
                      key={value.id_schedule}
                    >
                      <div className="manage__schedule-list-card-header">
                        <div className="text-center">
                          <img
                            src={
                              value.premiere === "Hiflix"
                                ? Hiflix
                                : value.premiere === "Ebv.id"
                                ? EbvId
                                : value.premiere === "CineOne21"
                                ? CineOne21
                                : null
                            }
                            className="manage__schedule-list-card-image w-75 img-fluid"
                            alt={
                              value.premiere === "Hiflix"
                                ? "Hiflix"
                                : value.premiere === "Ebv.id"
                                ? "Ebv.Id"
                                : value.premiere === "CineOne21"
                                ? "CineOne21"
                                : null
                            }
                          />
                        </div>
                        <div className="manage__schedule-list-card-premiere">
                          <span>{value.premiere}</span>
                          <span>{value.location}</span>
                        </div>
                      </div>
                      <hr />
                      <div className="row manage__schedule-list-card-body">
                        {value.time.map((schedule, index) => (
                          <div
                            className="col-md-3 mt-2 manage__schedule-list-card-time-title"
                            key={index}
                          >
                            <span>{schedule}</span>
                          </div>
                        ))}
                      </div>
                      <div className="manage__schedule-list-card-price">
                        <span>Price</span>
                        <span>Rp.{value.price}/seat</span>
                      </div>
                      <div className="manage__schedule-list-card-parent">
                        <button
                          className="manage__schedule-list-card-button-active"
                          onClick={() =>
                            this.handleUpdateSchedule(
                              value,
                              value.id_schedule,
                              true
                            )
                          }
                        >
                          Update
                        </button>
                        <button
                          className="manage__schedule-list-card-button"
                          onClick={() => this.handleDeleteSchedule(value.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>Schedule tidak ditemukan!</p>
              )}
            </section>
            <div>
              <Pagination
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={this.state.totalPage}
                onPageChange={this.handlePagination}
                containerClassName={"schedule__pagination"}
                activeClassName={"schedule__pagination-button"}
              />
            </div>
          </main>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  premieres: state.premiere,
});

const mapDispatchToProps = {
  searchPremiere,
  getAllMovie,
  setUpdate,
  getAllPremiere,
  deletePremiere,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ManageSchedule));
