import { useEffect, useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Header from "./components/Header";
import { getCurrencies } from "./utils/getCurrencies";
import { getCountries } from "./utils/getCountries";

const mock = [
  {
    country: "United States of America",
    amount: 1230.45,
    currency: "USD",
    showCents: false,
    format: "symbol",
    delimiter: "comma",
    position: "before",
  },
];

function App() {
  const [currencies, setCurrencies] = useState(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(mock);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCurrencyMap = async () => {
      const result = await getCurrencies();
      setCurrencies(result);
    };

    getCurrencyMap();
  }, []);

  useEffect(() => {
    const getCountryList = async () => {
      const result = await getCountries();
      setCountries(result);
    };

    getCountryList();
    console.log(countries);
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <div>
          <Header
            data={data}
            setData={setData}
            currencyMap={currencies}
            countries={countries}
          />
          <Display
            data={data}
            setData={setData}
            currencyMap={currencies}
            countries={countries}
          />
        </div>
      )}
    </div>
  );
}

export default App;
