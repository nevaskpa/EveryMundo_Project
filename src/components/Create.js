import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

function Create({ data, setData }) {
  const [amount, setAmount] = useState();
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");
  const [showCents, setShowCents] = useState(false);
  const [format, setFormat] = useState("symbol");
  const [position, setPosition] = useState("before");
  const [delimiter, setDelimiter] = useState("comma");

  const [add, setAdd] = useState(false);

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
    setAdd(false);
  };
  return (
    <div>
      <button class="btn btn-primary" onClick={() => setAdd(true)}>
        Add
      </button>
      <Dialog open={add} onClose={() => setAdd(false)}>
        <DialogTitle class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          Add New Entry
        </DialogTitle>
        <DialogContent>
          <form class="row g-3">
            <div class="col-md-4">
              <label for="amount" class="form-label">
                Amount
              </label>
              <input
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="currency" class="form-label">
                Currency
              </label>
              <input
                type="text"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="country" class="form-label">
                Country
              </label>
              <input
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <label for="format" class="form-label">
                Format
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                class="form-select"
              >
                <option value="symbol">Symbol</option>
                <option value="code">Code</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="position" class="form-label">
                Position
              </label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                class="form-select"
              >
                <option value="before">Before</option>
                <option value="after">After</option>
              </select>
            </div>

            <div class="col-md-4">
              <label for="delimiter" class="form-label">
                Delimiter
              </label>
              <select
                value={delimiter}
                onChange={(e) => setDelimiter(e.target.value)}
                class="form-select"
              >
                <option value="comma">#,###.##</option>
                <option value="dot">#.###,##</option>
              </select>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  type="checkbox"
                  checked={showCents}
                  onChange={(e) => setShowCents(e.target.checked)}
                  class="form-check-input"
                />
                <label class="form-check-label" for="gridCheck">
                  Show Cents
                </label>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <div class="col-2 text-right">
            <div>
              <button onClick={onSubmit} class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Create;
