import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GOOGLE_SUCCESS
} from "../actions/TypesAuth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuth: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        isLoading: false
      };
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuth: false,
        isLoading: false,
        user: null
      };

    case GOOGLE_SUCCESS:
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
}
