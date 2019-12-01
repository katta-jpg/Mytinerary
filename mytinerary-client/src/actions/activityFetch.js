import axios from "axios";
import { GET_ITEMS_A, LOADING_A, ERROR_A } from "./TypesA";

export const getActivity = itineraryId => dispach => {
  dispach({
    type: LOADING_A
  });

  axios
    .get(`http://localhost:5000/activities/${itineraryId}`)
    .then(data => {
      dispach({
        type: GET_ITEMS_A,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error:", err);
      dispach({
        type: ERROR_A,
        payload: "Activity information not available"
      });
    });
};
