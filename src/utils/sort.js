import { compareCountries, compareCurrencies } from "./compare";

export function sortByCountries(data) {
  return data.sort(compareCountries);
}

export function sortByCurrencies(data) {
  return data.sort(compareCurrencies);
}
