import { combineReducers } from "redux";

import counter from "./counter";
import auth from "./auth";
import movie from "./movie";
import getdatauser from "./getdatauser";

export default combineReducers({
  counter: counter,
  auth,
  movie,
  getdatauser
});
