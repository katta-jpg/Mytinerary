import axios from "axios";
import { GET_ITEMS, LOADING, ERROR } from "./Types";

export const getCitys = () => dispach => {
  dispach({
    type: LOADING
  });

  axios
    .get("http://localhost:5000/api/cities")
    //.get("http://192.168.0.21:5000/api/cities")
    .then(data => {
      dispach({
        type: GET_ITEMS,
        payload: data.data
      });
    })
    .catch(err => {
      console.log("Error:", err);
      dispach({
        type: ERROR,
        payload: "Cities information not available"
      });
    });
};
