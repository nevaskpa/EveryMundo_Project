import { useEffect, useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Display from "./components/Display";
import Header from "./components/Header";
import { getCurrencies } from "./utils/getCurrencies";

const mock = [
  {
    country: "USA",
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

  useEffect(() => {
    const getCurrencyMap = async () => {
      const result = await getCurrencies();
      setCurrencies(result);
    };

    getCurrencyMap();
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p> Loading... </p>
      ) : (
        <div>
          <Header />
          <Create setData={setData} data={data} />
          <Display data={data} setData={setData} currencyMap={currencies} />
        </div>
      )}
    </div>
  );
}

export default App;
