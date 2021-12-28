import { combineReducers } from "redux";

import counter from "./counter";
import auth from "./auth";
import movie from "./movie";
import user from "./user";
import premiere from "./premiere";

export default combineReducers({
  counter: counter,
  auth,
  movie,
  user,
  premiere,
});
