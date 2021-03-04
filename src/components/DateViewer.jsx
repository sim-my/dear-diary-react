import dateImg from "../assets/images/date.png";
import dateFormatter from "../utils/dateFormatter";
import "../assets/styles/dateViewer.css";
import React from "react";

const DateViewer = (props) => {
 
  const date = dateFormatter(props.date)

  return (
    <div className="date-viewer">
      <img className="date-img" src={dateImg} alt="Date" />
      <p className="month">{date.mm}</p>
      <p className="date">{date.dd}</p>
      <p className="year">{date.day}, {date.yyyy}</p>
    </div>
  );
};

export default DateViewer;
