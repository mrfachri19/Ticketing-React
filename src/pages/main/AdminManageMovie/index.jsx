import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  createMovie,
  getAllMovie,
  updateMovie,
} from "../../../store/actions/movie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Header";
import Footer from "../../Footer";
import DataListMovie from "../../../components/Data-MovieList";
import "./index.css";

function ManageMovie(props) {
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      props.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line no-unused-vars
  const [displayImage, setDisplayImage] = useState("");
  const [dataFormMovie, setFormMovie] = useState({
    name: "",
    category: "",
    director: "",
    cast: "",
    releaseDate: "",
    duration: "",
    synopsis: "",
    id: "",
    image: null,
  });
  const inputFile = useRef(dataFormMovie.image);
  // const [isShow, setShow] = useState(false);
  const changeFileImage = (event) => {
    setDisplayImage(URL.createObjectURL(event.target.files[0]));
    setFormMovie({ ...dataFormMovie, image: event.target.files[0] });
  };

  const handleChangeInput = (e) => {
    setFormMovie({ ...dataFormMovie, [e.target.name]: e.target.value });
  };

  const handleUpdateMovie = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const movies in dataFormMovie) {
      formData.append(movies, dataFormMovie[movies]);
    }
    props.updateMovie(formData, dataFormMovie.id).then(() => {
      setFormMovie({
        name: "",
        category: "",
        director: "",
        cast: "",
        releaseDate: "",
        duration: "",
        synopsis: "",
      });
      toast.success("Berhasil mengubah movie");
      props.getAllMovie(1, 20, "ASC");
      window.location.reload();
      props.movie.isUpdate = false;
    });
  };

  const handleManageMovie = (event) => {
    event.preventDefault();
    const {
      name,
      category,
      cast,
      director,
      duration,
      image,
      releaseDate,
      synopsis,
    } = dataFormMovie;
    const setDataMovie = {
      name,
      category,
      cast,
      director,
      duration,
      image,
      releaseDate,
      synopsis,
    };
    const formImage = new FormData();
    for (const movies in setDataMovie) {
      formImage.append(movies, setDataMovie[movies]);
    }
    for (const data in setDataMovie) {
      if (setDataMovie[data] === "") {
        toast.error("Lengkapi Form yang kosong!");

        return false;
      }
    }

    props.createMovie(formImage).then(() => {
      toast.success("Berhasil menambahkan movie!");
      setFormMovie({
        name: "",
        category: "",
        director: "",
        cast: "",
        releaseDate: "",
        duration: "",
        synopsis: "",
      });
      props.getAllMovie(1, 20, "ASC");
    });
  };
  const handleReset = () => {
    setFormMovie({
      name: "",
      category: "",
      director: "",
      cast: "",
      releaseDate: "",
      duration: "",
      synopsis: "",
    });
    props.movie.isUpdate = false;
  };

  const handleChangeFile = () => {
    inputFile.current.click();
  };

  useEffect(() => {
    setFormMovie({ ...props.movie.data });
  }, [props.movie.data]);

  return (
    <div>
      <Header />
      <Container>
        <section className="manage__movie-form">
          <div className="d-flex justify-content-between">
            <h5 className="manage__movie-form-title">Form Movie</h5>
            <ToastContainer />
          </div>
          <div className="manage__movie-form-card">
            <form
              onSubmit={
                props.movie.isUpdate ? handleUpdateMovie : handleManageMovie
              }
            >
              <div className="manage__movie-form-card-body">
                <div
                  className="manage__movie-form-card-image-parent"
                  onClick={handleChangeFile}
                >
                  <img
                    src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    className="img-fluid"
                    alt="Movie"
                  />
                  <input
                    type="file"
                    name="image"
                    ref={inputFile}
                    onChange={changeFileImage}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="row manage__movie-form-card-container">
                  <div className="col-md-6">
                    <label>Movie Name</label>
                    <input
                      type="text"
                      className="manage__movie-form-card-input"
                      placeholder="Spider-Man: Homecoming"
                      name="name"
                      onChange={handleChangeInput}
                      id="name"
                      value={dataFormMovie.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      className="manage__movie-form-card-input"
                      placeholder="Action, Adventure, Sci-Fi"
                      name="category"
                      onChange={handleChangeInput}
                      id="category"
                      value={dataFormMovie.category}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="director">Director</label>
                    <input
                      type="text"
                      className="manage__movie-form-card-input"
                      placeholder="Jon Watts"
                      name="director"
                      onChange={handleChangeInput}
                      id="director"
                      value={dataFormMovie.director}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="casts">Casts</label>
                    <input
                      type="text"
                      className="manage__movie-form-card-input"
                      placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                      name="cast"
                      onChange={handleChangeInput}
                      id="cast"
                      value={dataFormMovie.cast}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input
                      type="date"
                      className="manage__movie-form-card-input"
                      name="releaseDate"
                      id="releaseDate"
                      onChange={handleChangeInput}
                      value={dataFormMovie.releaseDate}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="durationHour">Duration Hour</label>
                    <input
                      type="text"
                      className="manage__movie-form-card-input"
                      placeholder="2"
                      name="duration"
                      onChange={handleChangeInput}
                      id="duration"
                      value={dataFormMovie.duration}
                    />
                  </div>
                </div>
              </div>
              <h6 style={{ margin: "20px 0px 10px 0px" }}>Synopsis</h6>
              <div>
                <input
                  type="text"
                  className="manage__movie-form-card-synopsis"
                  placeholder="lorem ipsum...."
                  name="synopsis"
                  onChange={handleChangeInput}
                  id="synopsis"
                  value={dataFormMovie.synopsis}
                />
              </div>
              <div className="manage__movie-form-card-container-button">
                <button
                  className="manage__movie-card-button"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="manage__movie-card-button-active"
                >
                  {props.movie.isUpdate ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </section>
        <DataListMovie />
      </Container>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = {
  updateMovie,
  getAllMovie,
  createMovie,
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageMovie);
