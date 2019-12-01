import { GET_ITEMS_I, LOADING_I, ERROR_I } from "../actions/TypesI";

const initialState = {
  itinerarys: [],
  loading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_I:
      return {
        ...state,
        itinerarys: action.payload,
        loading: false,
        error: ""
      };
    case LOADING_I:
      return {
        ...state,
        loading: true
      };
    case ERROR_I:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
