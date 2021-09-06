import React, { useState, useEffect, useRef } from "react";
import RowBody from "../rowBody/rowBody";
import RowHead from "../rowHead/rowHead";

import "./table.css";

const Table = ({ dataUrl }) => {
  // to array
  const keys = Object.keys(dataUrl);
  const subItem = keys.map((el) => dataUrl[el]);

  //   get keys for row title
  const subItemTitle = Object.keys(subItem[0]);

  // sticky 
  const [isTop, setTop] = useState(0);
  const [isHeight, setHeight] = useState(0);

  const ref = useRef();

  const handleScroll = () => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
      setTop(ref.current.getBoundingClientRect().top);
    }
  };

  // 2
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  let heightStyle;

  const heightSummary = () => {
    if (isTop > 0) {
    } else if (isTop < 0 < isTop + isHeight - 250) {
      heightStyle = -isTop;
    } else {
    }
  };

  heightSummary();

  return (
    <div className="table" ref={ref}>
      <div className="table-wrapper">
        {/* column name   */}
        <div className={`header-wrapper `} style={{ top: heightStyle }}>
          {subItemTitle.map((el, id) => (
            <RowHead key={id} dataHeadName={el} />
          ))}
        </div>
        {/* body row elem  */}
        <div className="body-wrapper">
          {subItem.map((el, id) => (
            <RowBody key={id} color={id} dataBody={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
