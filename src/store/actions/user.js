import axios from "../../utils/axios";
export const GetUser = () => {
  return {
    type: "GETUSER",
    payload: axios.get("user"),
  };
};
