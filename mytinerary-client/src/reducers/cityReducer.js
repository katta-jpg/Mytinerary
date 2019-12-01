import { GET_ITEMS, LOADING, ERROR } from "../actions/Types";

const initialState = {
  citys: [],
  loading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        citys: action.payload,
        loading: false,
        error: ""
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
