import axios from "../../utils/axios";

export const searchPremiere = (movieId, location, page, limit, sort) => {
  return {
    type: "SEARCHPREMIERE",
    payload: axios.get(
      `schedule?searchMovieId=${movieId}&searchLocation=${location}&page=${page}&limit=${limit}&sort=${sort}`
    ),
  };
};

export const setUpdate = (data, id) => {
  return {
    type: "SETUPDATE",
    data: data,
    id: id,
  };
};

export const getAllPremiere = (page, limit) => {
  return {
    type: "GETALLPREMIERE",
    payload: axios.get(`schedule?page=${page}&limit=${limit}`),
  };
};

export const updatePremiere = (data, id) => {
  return {
    type: "UPDATEPREMIERE",
    payload: axios.patch(`schedule/update/${id}`, data),
  };
};

export const postPremiere = (data) => {
  return {
    type: "POSTPREMIERE",
    payload: axios.post("schedule/create", data),
  };
};

export const deletePremiere = (id) => {
  return {
    type: "DELETEPREMIERE",
    payload: axios.delete(`schedule/delete/${id}`),
  };
};
