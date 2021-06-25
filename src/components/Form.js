import React from "react";

function Form({ setters, values, onSubmit }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setters.setAmount(e.target.value)}
        placeholder="Amount"
        value={values.amount}
      />
      <input
        type="text"
        onChange={(e) => setters.setCurrency(e.target.value)}
        placeholder="Currency"
        value={values.currency}
      />
      <input
        type="text"
        onChange={(e) => setters.setCountry(e.target.value)}
        placeholder="Country"
        value={values.country}
      />
      <br />
      <label>
        {" "}
        Set cents
        <input
          type="checkbox"
          checked={values.showCents}
          onChange={(e) => setters.setShowCents(e.target.checked)}
        />
      </label>
      <label>
        {" "}
        Show currency as:{" "}
        <select
          value={values.format}
          onChange={(e) => setters.setFormat(e.target.value)}
        >
          <option value="symbol">Symbol</option>
          <option value="code">Code</option>
        </select>
      </label>
      <br />
      <label>
        {" "}
        Currency position:{" "}
        <select
          value={values.position}
          onChange={(e) => setters.setPosition(e.target.value)}
        >
          <option value="before">Before</option>
          <option value="after">After</option>
        </select>
      </label>
      <br />
      <label>
        {" "}
        Display Format:{" "}
        <select
          value={values.delimiter}
          onChange={(e) => setters.setDelimiter(e.target.value)}
        >
          <option value="comma">#,###.##</option>
          <option value="dot">#.###,##</option>
        </select>
      </label>
      <br />
      <button onClick={onSubmit}>Done</button>
    </div>
  );
}

export default Form;
