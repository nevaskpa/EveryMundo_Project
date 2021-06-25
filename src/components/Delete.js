import React from "react";

function Delete({ data, setData, index }) {
  const handleDelete = (index) => {
    const newData = data.filter((item) => {
      if (data.indexOf(item) === index) return;
      return item;
    });

    setData(newData);
  };
  return <button onClick={() => handleDelete(index)}>Delete</button>;
}

export default Delete;
