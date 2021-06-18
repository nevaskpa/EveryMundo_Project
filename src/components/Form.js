import React, { useRef, useState } from "react";

const mock = [
  {
    country: "USA",
    amount: 1230.45,
    currency: "USD",
  },
];

const currencyMap = new Map();
currencyMap.set("USD", "$");
currencyMap.set("EUR", "#");

function Form() {
  const [amount, setAmount] = useState();
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [showCents, setShowCents] = useState(false);
  const [format, setFormat] = useState("symbol");
  const [position, setPosition] = useState("before");

  const data = useRef(mock);

  const onSubmit = () => {
    data.current = [
      ...data.current,
      {
        country: country,
        amount: amount,
        currency: currency,
      },
    ];
    setAmount("");
    setCountry("");
    setCurrency("");
    console.log(data);
  };

  const getFormat = (currency, format) => {
    let currencyFormat = "";
    currencyFormat = format === "symbol" ? currencyMap.get(currency) : currency;
    return currencyFormat;
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        value={amount}
      />
      <input
        type="text"
        onChange={(e) => setCurrency(e.target.value)}
        placeholder="Currency"
        value={currency}
      />
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Country"
        value={country}
      />
      <br />
      <label>
        {" "}
        Set cents
        <input
          type="checkbox"
          checked={showCents}
          onChange={(e) => setShowCents(e.target.checked)}
        />
      </label>
      <label>
        {" "}
        Show currency as:{" "}
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="symbol">Symbol</option>
          <option value="code">Code</option>
        </select>
      </label>
      <br />
      <label>
        {" "}
        Currency position:{" "}
        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="before">Before</option>
          <option value="after">After</option>
        </select>
      </label>
      <br />
      <button onClick={onSubmit}>Submit</button>

      <table>
        <tr>
          <th>Amount</th>
          <th>Country</th>
        </tr>
        {data.current.map((obj, index) => (
          <tr key={index}>
            {showCents ? (
              <td>{obj.amount + getFormat(obj.currency, format)}</td>
            ) : (
              <td>
                {Math.trunc(obj.amount) + getFormat(obj.currency, format)}
              </td>
            )}
            <td>{obj.country}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Form;
