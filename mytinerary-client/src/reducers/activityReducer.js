import { GET_ITEMS_A, LOADING_A, ERROR_A } from "../actions/TypesA";

const initialState = {
  activities: [],
  loading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_A:
      return {
        ...state,
        activities: action.payload,
        loading: false,
        error: ""
      };
    case LOADING_A:
      return {
        ...state,
        loading: true
      };
    case ERROR_A:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
