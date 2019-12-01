import axios from "axios";
import { GET_ITEMS_I, LOADING_I, ERROR_I } from "./TypesI";

export const getItinerarys = city => dispach => {
  dispach({
    type: LOADING_I
  });

  axios
    .get(`http://localhost:5000/itinerary/${city}`)
    .then(data => {
      dispach({
        type: GET_ITEMS_I,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error:", err);
      dispach({
        type: ERROR_I,
        payload: "Itinerary information not available"
      });
    });
};
