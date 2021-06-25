import React, { useState } from "react";
import Form from "./Form";

function Edit({ data, setData, index }) {
  const [amount, setAmount] = useState(data[index].amount);
  const [country, setCountry] = useState(data[index].country);
  const [currency, setCurrency] = useState(data[index].currency);
  const [showCents, setShowCents] = useState(data[index].showCents);
  const [format, setFormat] = useState(data[index].format);
  const [position, setPosition] = useState(data[index].position);
  const [delimiter, setDelimiter] = useState(data[index].delimiter);
  const [edit, setEdit] = useState(false);

  const setters = {
    setAmount: setAmount,
    setFormat: setFormat,
    setCountry: setCountry,
    setCurrency: setCurrency,
    setShowCents: setShowCents,
    setPosition: setPosition,
    setDelimiter: setDelimiter,
  };
  const values = [
    amount,
    format,
    country,
    currency,
    showCents,
    position,
    delimiter,
  ];

  const onSubmit = () => {
    let newData = data.map((item) => {
      if (data.indexOf(item) !== index) return item;
      return {
        ...item,
        country: country,
        amount: amount,
        currency: currency,
        showCents: showCents,
        format: format,
        delimiter: delimiter,
        position: position,
      };
    });
    setData(newData);
    setEdit(false);
  };

  return (
    <div>
      <button onClick={() => setEdit(true)}>Edit</button>
      {edit ? (
        <Form setters={setters} values={values} onSubmit={onSubmit} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Edit;
