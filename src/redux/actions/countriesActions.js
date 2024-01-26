import axios from "axios";

const baseUrl = "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json";

// Define a cache variable to store the retrieved country data
let cachedCountries = null;

const getCountriesAction = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_COUNTRIES_REQUEST" });

    // Check if countries data is already cached
    if (cachedCountries) {
      dispatch({
        type: "GET_COUNTRIES_SUCCESS",
        payload: cachedCountries
      });
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.get(baseUrl, config);
      console.log(data);

      cachedCountries = data;

      dispatch({
        type: "GET_COUNTRIES_SUCCESS",
        payload: data
      });
    }
  } catch (err) {
    console.log(err);
    let message = err.response && err.response.data.message ? err.response.data.message : err.message;
    dispatch({
      type: "GET_COUNTRIES_FAIL",
      payload: message
    });
  }
};

export { getCountriesAction };
