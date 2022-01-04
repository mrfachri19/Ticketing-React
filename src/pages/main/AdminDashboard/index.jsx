import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "../../../utils/axios";
import { connect } from "react-redux";
import { getAllPremiere } from "../../../store/actions/premiere";
import { getAllMovie } from "../../../store/actions/movie";
import { getDashboard } from "../../../store/actions/user";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
// eslint-disable-next-line no-unused-vars
import { Chart } from "react-chartjs-2";
import Header from "../../Header";
import Footer from "../../Footer";

import "./index.css";

const TiketResult = (props) => {
  const history = useHistory();
  const [statistic, setStatistic] = useState(props.user.data);
  const [dataLocation, setDataLocation] = useState([]);
  const [dataMovie, setDataMovie] = useState(props.movie);
  const [dataPremiere, setDataPremiere] = useState(props.premiere);
  const [location, setLocation] = useState("");
  const [premiere, setPremiere] = useState("");
  const [movie, setMovie] = useState("");
  const [isError, setError] = useState(false);

  const findDataDashboard = (event) => {
    event.preventDefault();
    props
      .getDashboard(movie, location, premiere)
      .then((response) => {
        setStatistic(response.value.data.data);
        setError(false);
        event.target.reset();
      })
      .catch(() => {
        setError(true);
      });
  };

  const getLocation = async () => {
    try {
      const response = await axios.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      setDataLocation(response.data.provinsi);
    } catch (error) {
      new Error(error.message);
    }
  };
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      history.push("/");
    }
    getLocation();
    props.getAllMovie(1, 20, "name ASC");
    props.getAllPremiere();
    setDataMovie(props.movie);
    setDataPremiere(props.premiere);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, premiere, movie]);

  let setDataMonth = [];
  let setDataCount = [];

  // eslint-disable-next-line array-callback-return
  const dataDashboard = statistic.map((value) => {
    const bulan = value.month;
    const total = value.total;
    const setNewDataCount = total;
    const setNewDataMonth = bulan;
    setDataCount.push(setNewDataCount);
    setDataMonth.push(setNewDataMonth);
  });

  if (!dataDashboard) {
    return null;
  }

  const labels = setDataMonth;
  const totalCount = setDataCount;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Statistic Movie",
        backgroundColor: "#5F2EEA",
        borderColor: "#5F2EEA",
        data: totalCount.length > 0 ? totalCount : null,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
    },
  };
  return (
    <div>
      <Header />
      <Container>
        <section className="dashboard__chart">
          <h3>Dashboard</h3>
          {isError ? (
            <p className="fw-bold text-center mt-5 text-danger">
              Statistic not found!
            </p>
          ) : (
            <div className="dashboard__chart-card">
              <Line data={data} options={config} />
            </div>
          )}
        </section>
        <section className="dashboard__filter">
          <h3>Filtered</h3>
          <div className="dashboard__filter-container">
            <form onSubmit={findDataDashboard}>
              <div className="mb-4">
                <select
                  className="dashboard__filter-movie"
                  name="movie"
                  onChange={(e) => setMovie(e.target.value)}
                >
                  <option hidden>Select Movie</option>
                  <option hidden>Select Location</option>
                  {dataMovie.movies.map((movie) => (
                    <>
                      <option value={movie.id} key={movie.id}>
                        {movie.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <select
                  className="dashboard__filter-premiere"
                  name="premiere"
                  onChange={(e) => setPremiere(e.target.value)}
                >
                  <option hidden>Select Premiere</option>
                  {dataPremiere.premiere.map((premiere) => {
                    return (
                      <>
                        <option value={premiere.premiere} key={premiere.id}>
                          {premiere.premiere}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="mb-4">
                <select
                  className="dashboard__filter-location"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option hidden>Select Location</option>
                  {dataLocation.map((city) => (
                    <>
                      <option value={city.nama} key={city.id}>
                        {city.nama}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="dashboard__filter-button-filter"
                >
                  Filter
                </button>
                <button type="reset" className="dashboard__filter-button-reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  movie: state.movie,
  premiere: state.premiere,
  user: state.user,
});

const mapDispatchToProps = {
  getAllMovie,
  getAllPremiere,
  getDashboard,
};
export default connect(mapStateToProps, mapDispatchToProps)(TiketResult);
