import axios from "axios";
import { returnErrors } from "./errorActions";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./TypesAuth";

export const tokenConfig = getState => {
  const token = getState().authReducer.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token) {
    config.headers["Authorization"] = "bearer" + " " + token;
  }
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get("http://localhost:5000/api/login", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const register = ({
  firstname,
  lastname,
  password,
  email,
  profilePic,
  country
}) => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify({
    firstname,
    lastname,
    password,
    email,
    profilePic,
    country
  });
  axios
    .post("http://localhost:5000/api/registry", body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};
