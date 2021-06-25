import React, { useState } from "react";
import Form from "./Form";

function Create({ data, setData }) {
  const [amount, setAmount] = useState();
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [showCents, setShowCents] = useState(false);
  const [format, setFormat] = useState("symbol");
  const [position, setPosition] = useState("before");
  const [delimiter, setDelimiter] = useState("comma");

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
  return <Form setters={setters} values={values} onSubmit={onSubmit} />;
}

export default Create;
