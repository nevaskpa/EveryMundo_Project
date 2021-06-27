import React, { useState } from "react";

function Create({ data, setData }) {
  const [amount, setAmount] = useState();
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [showCents, setShowCents] = useState(false);
  const [format, setFormat] = useState("symbol");
  const [position, setPosition] = useState("before");
  const [delimiter, setDelimiter] = useState("comma");

  const onSubmit = () => {
    let newData = [
      ...data,
      {
        country: country,
        amount: amount,
        currency: currency,
        showCents: showCents,
        format: format,
        delimiter: delimiter,
        position: position,
      },
    ];
    setData(newData);
    setAmount("");
    setCountry("");
    setCurrency("");
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
      <label>
        {" "}
        Display Format:{" "}
        <select
          value={delimiter}
          onChange={(e) => setDelimiter(e.target.value)}
        >
          <option value="comma">#,###.##</option>
          <option value="dot">#.###,##</option>
        </select>
      </label>
      <br />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Create;
