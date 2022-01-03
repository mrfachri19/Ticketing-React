import axios from "../../utils/axios";
export const GetUser = () => {
  return {
    type: "GETUSER",
    payload: axios.get("user"),
  };
};

export const updatePassword = (data) => {
  return {
    type: "UPDATEPASSWORD",
    payload: axios.patch("user/update-password", data),
  };
};

export const getDashboard = (movieId, location, premiere) => {
  return {
    type: "GETDASHBOARD",
    payload: axios.get(
      `user/dashboard/?movieId=${movieId}&location=${location}&premier=${premiere}`
    ),
  };
};

export const useTicked = (id) => {
  return {
    type: "TICKETUSED",
    payload: axios.get(`booking/used-ticket/${id}`),
  };
};
