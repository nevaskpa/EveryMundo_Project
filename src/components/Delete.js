import React from "react";

function Delete({ data, setData, index }) {
  const handleDelete = (index) => {
    let result = window.confirm("Are you sure you want to delete this record?");
    if (result) {
      const newData = data.filter((item) => {
        if (data.indexOf(item) === index) return;
        return item;
      });

      setData(newData);
    }
  };
  return (
    <button class="btn btn-danger" onClick={() => handleDelete(index)}>
      Delete
    </button>
  );
}

export default Delete;
