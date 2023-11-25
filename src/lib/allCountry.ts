import axios from "axios";

export const allCountry = async () => {
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
    headers: {
      "X-RapidAPI-Key": "4de5cb1fddmshaed70ccf59f85ebp1cb8b8jsn6e65125cc847",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
