import axios from "../../utils/axios";

export const getdatauser = (data) => {
  return {
    type: "GETUSER",
    payload: axios.get(`user/${data}`)
  };
};
