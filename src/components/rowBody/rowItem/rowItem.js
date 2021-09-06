import React from "react";

const RowItem = ({ data, color }) => {
    //fn add color bg for row
  const even = (id) => (id % 2 === 0 ? "grey" : "white");

  return <p className={`item ${even(color)}`}>{data.toString()}</p>;
};

export default RowItem;
