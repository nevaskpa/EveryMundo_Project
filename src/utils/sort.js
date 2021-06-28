import {
  compareCountriesAsc,
  compareCountriesDesc,
  compareCurrenciesAsc,
  compareCurrenciesDesc,
} from "./compare";

export function sortByCountriesAsc(data) {
  return data.sort(compareCountriesAsc);
}

export function sortByCountriesDesc(data) {
  return data.sort(compareCountriesDesc);
}

export function sortByCurrenciesAsc(data) {
  return data.sort(compareCurrenciesAsc);
}

export function sortByCurrenciesDesc(data) {
  return data.sort(compareCurrenciesDesc);
}
