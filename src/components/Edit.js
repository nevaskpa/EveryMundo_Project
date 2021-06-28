import React, { useEffect, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function Edit({ data, setData, index }) {
  const [amount, setAmount] = useState();
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [showCents, setShowCents] = useState(false);
  const [format, setFormat] = useState("symbol");
  const [position, setPosition] = useState("before");
  const [delimiter, setDelimiter] = useState("comma");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setAmount(data[index].amount);
    setCountry(data[index].country);
    setCurrency(data[index].currency);
    setShowCents(data[index].showCents);
    setFormat(data[index].format);
    setPosition(data[index].position);
    setDelimiter(data[index].delimiter);
  }, [edit]);

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
      <Dialog open={edit} onClose={() => setEdit(false)}>
        <DialogTitle>Add New Entry</DialogTitle>
        <DialogContent>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            value={amount}
          />{" "}
          {console.log(amount, data[index].amount, index)}
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
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
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
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
            >
              <option value="comma">#,###.##</option>
              <option value="dot">#.###,##</option>
            </select>
          </label>
          <br />
        </DialogContent>
        <DialogActions>
          <button onClick={onSubmit}>Update</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Edit;
