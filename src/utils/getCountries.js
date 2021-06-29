import axios from "axios";

export async function getCountries() {
  let countries = [];

  let response = await axios.get("https://restcountries.eu/rest/v2/all");

  for (let i = 0; i < response.data.length; i++) {
    countries.push(response.data[i].name);
  }

  return countries;
}
