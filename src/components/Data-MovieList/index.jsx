import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getAllMovie,
  deleteMovie,
  updateMovie,
  searchMovie,
  searchSort,
  setDataUpdate,
} from "../../store/actions/movie";
import Pagination from "react-paginate";

function DataListMovie(props) {
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      props.history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const history = useHistory();
  const [dataMovies, setMovies] = useState(props.movie.movies);
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const [pageInfo] = useState(props.movie.pageInfo.totalPage);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  // const [isError, setError] = useState(props.movie.isError);
  const getAllMovieData = () => {
    props
      .getAllMovie(page, limit, sort)
      .then((response) => setMovies(response.value.data.data))
      .catch((error) => new Error(error));
  };

  const handleDeleteMovie = (id) => {
    // eslint-disable-next-line no-restricted-globals
    const userClick = confirm("Movie akan di hapus, anda yakin?");
    if (userClick) {
      props.deleteMovie(id).then(() => {
        props.getAllMovie(page, limit, "ASC").then((response) => {
          setMovies(response.value.data.data);
          toast.success("Movie berhasil di hapus");
        });
      });
    } else {
      toast.error("Batal menghapus movie!");
      return false;
    }
  };
  console.log(dataMovies);
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    if (event.key === "Enter") {
      props
        .searchMovie(search)
        .then((response) => {
          const newData = response.value.data.data;
          props.movie.movies = newData;
          history.push(`/managemovie?search=${searchValue}`);
        })
        .catch((error) => new Error(error.message));
    }
    setSearch(searchValue);
  };

  const handleSort = (event) => {
    const sortValue = event.target.value;
    setSort(sortValue);
    history.push(`/managemovie?sort=${event.target.value}`);
  };

  const handleChangePagination = (event) => {
    const countPage = event.selected + 1;
    setPage(countPage, () => props.getAllMovie(page, limit, "ASC"));
  };

  useEffect(() => {
    getAllMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, sort]);
  return (
    <>
      <section className="manage__movie-list">
        <div className="manage__movie-list-container">
          <ToastContainer />
          <div className="manage__movie-list-row">
            <div className="manage__movie-list-column">
              <h5>Data Movie</h5>
            </div>
            <div className="manage__movie-list-column">
              <select
                className="manage__movie-list-sort fw-bold"
                name="sort"
                onChange={handleSort}
              >
                <option hidden>Sort</option>
                <option value="name ASC">A - Z</option>
                {/* <option value="DESC">December - January</option> */}
              </select>
              <input
                type="text"
                className="manage__movie-list-search"
                placeholder="Search Movie Name..."
                name="search"
                onKeyPress={handleSearch}
              />
            </div>
          </div>
          <div className="manage__movie-list-card">
            {props.movie.movies.length > 0 ? (
              props.movie.movies.map((film) => {
                const setDate = film.releaseDate;
                const setNewDate = new Date(setDate)
                  .toISOString()
                  .split("T")[0];
                const setNewDataMovie = { ...film, releaseDate: setNewDate };
                delete setNewDataMovie.createdAt;
                return (
                  <div
                    className="manage__movie-list-card-body"
                    key={setNewDataMovie.id}
                  >
                    <>
                      <img
                        src={`https://backend-fachri.fwebdev2.xyz//uploads/movie/${film.image}`}
                        className="manage__movie-list-card-image img-fluid"
                        alt={`${setNewDataMovie.name}`}
                      />
                      <span className="manage__movie-list-card-title-movie">
                        {setNewDataMovie.name}
                      </span>
                      <span className="manage__movie-list-card-category-movie">
                        {setNewDataMovie.category}
                      </span>
                      <button
                        className="manage__movie-list-card-button-update"
                        onClick={() =>
                          props.setDataUpdate(
                            setNewDataMovie,
                            setNewDataMovie.id
                          )
                        }
                      >
                        Update
                      </button>
                      <button
                        className="manage__movie-list-card-button-delete"
                        onClick={() => handleDeleteMovie(setNewDataMovie.id)}
                      >
                        Delete
                      </button>
                    </>
                  </div>
                );
              })
            ) : (
              <p>Coming Soon!</p>
            )}
          </div>
        </div>
      </section>

      <section className="manage__movie-pagination">
        <div>
          <Pagination
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            pageCount={pageInfo}
            onPageChange={handleChangePagination}
            containerClassName={"schedule__pagination"}
            activeClassName={"schedule__pagination-button"}
          />
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = {
  setDataUpdate,
  searchMovie,
  searchSort,
  getAllMovie,
  updateMovie,
  deleteMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DataListMovie));
