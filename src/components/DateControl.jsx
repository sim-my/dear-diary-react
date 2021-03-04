import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateControl = (props) => {

  return (
    <div className="form-group pb-2">
      <DatePicker
        className="form-control"
        name={props.name}
        selected={props.selected}
        onChange={props.onChange}
      />
    </div>
  );
};

export default DateControl;
