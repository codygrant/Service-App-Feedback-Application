import axios from "axios";
import { FETCH_USER } from "./types";

// create function so redux-thunk will call dispatch function
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// used to grab updated tokens after payment
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  // dispatch will update the redux store and therefore all components on page
  dispatch({ type: FETCH_USER, payload: res.data });
};
