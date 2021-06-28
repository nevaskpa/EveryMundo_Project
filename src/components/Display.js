import React, { useRef, useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import { sortByCountries, sortByCurrencies } from "../utils/sort";
import ExportCSV from "./ExportCSV";

function Display({ data, setData, currencyMap }) {
  const countrySort = useRef(false);
  const currencySort = useRef(false);
  const [, setSortedData] = useState([...data]);

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

  const handleSortByCountries = () => {
    let newData = [];
    countrySort.current = true;
    if (countrySort.current) {
      newData = sortByCountries(data);
      setSortedData([...newData]);
    } else {
      setSortedData([...data]);
    }
    setData(data);
  };

  const handleSortByCurrencies = () => {
    let newData = [];
    currencySort.current = true;
    if (currencySort.current) {
      newData = sortByCurrencies(data);
      setSortedData([...newData]);
    } else {
      setSortedData([...data]);
    }
    setData(data);
  };

  return (
    <table>
      <tr>
        <th>Amount</th>
        <th>Country</th>
        <th>Options</th>
        <th>
          <button onClick={handleSortByCountries}>Sort by Country</button>
          <button onClick={handleSortByCurrencies}>Sort by Currency</button>
          <ExportCSV data={data} />
        </th>
      </tr>
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
          <td>
            <Edit data={data} setData={setData} index={index} />
            <Delete data={data} setData={setData} index={index} />
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Display;
