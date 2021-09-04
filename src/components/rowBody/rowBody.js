import React from "react";
import RowItem from "./rowItem/rowItem";

const RowBody = ({ dataBody }) => {
  const dataBodyKeys = Object.keys(dataBody);

  return (
    <div className="row-body">
      {dataBodyKeys.map((el, id) => (
        <RowItem className="row-body" key={id} data={dataBody[el]} />
      ))}
    </div>
  );
};

export default RowBody;
