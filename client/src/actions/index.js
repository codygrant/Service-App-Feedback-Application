import axios from 'axios';
import { FETCH_USER } from "./types";

// create function so redux-thunk will call dispatch function
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res });
};