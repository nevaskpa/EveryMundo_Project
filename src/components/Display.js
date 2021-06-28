import React, { useRef, useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import {
  sortByCountriesDesc,
  sortByCountriesAsc,
  sortByCurrenciesDesc,
  sortByCurrenciesAsc,
} from "../utils/sort";

import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

function Display({ data, setData, currencyMap }) {
  const countrySort = useRef(false);
  const currencySort = useRef(false);
  const [, setSortedData] = useState([...data]);
  const [isCountryAsc, setIsCountryAsc] = useState(true);
  const [isCountrySort, setIsCountrySort] = useState(false);
  const [isCurrencyAsc, setIsCurrencyAsc] = useState(true);
  const [isCurrencySort, setIsCurrencySort] = useState(false);

  const displayCurrency = (currency, format, position, amount, delimiter) => {
    let finalCurrency = "";

    let currencyFormat =
      format === "symbol" ? currencyMap.get(currency) : currency;

    if (position === "before")
      finalCurrency = currencyFormat + addDelimiters(amount, delimiter);
    else finalCurrency = addDelimiters(amount, delimiter) + currencyFormat;

    return finalCurrency;
  };

  const addDelimiters = (number, delimiter) => {
    if (delimiter === "comma")
      return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    else {
      let new_num;
      new_num = number.toString().replace(/\./, ",");
      return new_num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }
  };

  const handleSortByCountriesAsc = () => {
    let newData = [];
    countrySort.current = true;
    if (countrySort.current) {
      newData = sortByCountriesAsc(data);
      setSortedData([...newData]);
    } else {
      setSortedData([...data]);
    }
    setData(data);
  };

  const handleSortByCountriesDesc = () => {
    let newData = [];
    countrySort.current = true;
    if (countrySort.current) {
      newData = sortByCountriesDesc(data);
      setSortedData([...newData]);
    } else {
      setSortedData([...data]);
    }
    setData(data);
  };

  const handleSortByCurrenciesAsc = () => {
    let newData = [];
    currencySort.current = true;
    if (currencySort.current) {
      newData = sortByCurrenciesAsc(data);
      setSortedData([...newData]);
    } else {
      setSortedData([...data]);
    }
    setData(data);
  };

  const handleSortByCurrenciesDesc = () => {
    let newData = [];
    currencySort.current = true;
    if (currencySort.current) {
      newData = sortByCurrenciesDesc(data);
      setSortedData([...newData]);
    } else {
      setSortedData([...data]);
    }
    setData(data);
  };
  return (
    <div>
      <br />
      <div class="row d-flex justify-content-center">
        <div class="table-responsive col-md-8">
          <table class="table table-bordered table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">
                  <label
                    onClick={() => {
                      setIsCountrySort(true);
                      setIsCountryAsc(!isCountryAsc);

                      if (isCountryAsc) handleSortByCountriesAsc();
                      else handleSortByCountriesDesc();
                    }}
                  >
                    Country
                  </label>
                  {!isCountrySort || data.length == 0 ? (
                    <FaSort />
                  ) : isCountryAsc ? (
                    <FaSortDown />
                  ) : (
                    <FaSortUp />
                  )}
                </th>
                <th scope="col">
                  <label
                    onClick={() => {
                      setIsCurrencySort(true);
                      setIsCurrencyAsc(!isCurrencyAsc);

                      if (isCurrencyAsc) handleSortByCurrenciesAsc();
                      else handleSortByCurrenciesDesc();
                    }}
                  >
                    Currency
                  </label>
                  {!isCurrencySort || data.length == 0 ? (
                    <FaSort />
                  ) : isCurrencyAsc ? (
                    <FaSortDown />
                  ) : (
                    <FaSortUp />
                  )}
                </th>
                <th scope="col">Show Cents</th>
                <th scope="col">Position</th>
                <th scope="col">Format</th>
                <th scope="col">Delimiter</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, index) => (
                <tr key={index}>
                  {obj.showCents ? (
                    <td>
                      {displayCurrency(
                        obj.currency,
                        obj.format,
                        obj.position,
                        obj.amount,
                        obj.delimiter
                      )}
                    </td>
                  ) : (
                    <td>
                      {displayCurrency(
                        obj.currency,
                        obj.format,
                        obj.position,
                        Math.trunc(obj.amount),
                        obj.delimiter
                      )}
                    </td>
                  )}
                  <td>{obj.country}</td>
                  <td>{obj.currency}</td>
                  <td>{obj.showCents.toString()}</td>
                  <td>{obj.position}</td>
                  <td>{obj.format}</td>
                  <td>{obj.delimiter}</td>
                  <td>
                    <div class="btn-group">
                      <div class="col-6 text-left">
                        <Edit data={data} setData={setData} index={index} />
                      </div>
                      <div class="col-6 text-right">
                        <Delete data={data} setData={setData} index={index} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Display;
