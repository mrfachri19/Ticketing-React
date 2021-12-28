import axios from "../../utils/axios";

export const searchSort = (sort) => {
  return {
    type: "SORTMOVIE",
    payload: axios.get(`movie?sort=${sort}`),
  };
};

export const searchMovie = (search) => {
  return {
    type: "SEARCHMOVIE",
    payload: axios.get(`movie?search=${search}`),
  };
};

export const createMovie = (data) => {
  return {
    type: "POSTMOVIE",
    payload: axios.post("movie", data),
  };
};

export const getAllMovie = (page, limit, sort) => {
  return {
    type: "GETALLMOVIE",
    payload: axios.get(
      `movie?search=&page=${page}&limit=${limit}&sort=${sort}`
    ),
  };
};

export const updateMovie = (data, id) => {
  return {
    type: "UPDATEMOVIE",
    payload: axios.patch(`movie/${id}`, data),
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETEMOVIE",
    payload: axios.delete(`movie/${id}`),
  };
};

export const setDataUpdate = (data) => {
  return {
    type: "SETDATAUPDATE",
    data: data,
  };
};
