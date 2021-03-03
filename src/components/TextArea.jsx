import React, { useState, useEffect } from "react";

const TextArea = (props) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-group">
      <textarea
        value={value}
        onChange={handleInputChange}
        placeholder={props.placeholder}
        className="form-control"
        rows={props.rows}
      ></textarea>
    </div>
  );
};

export default TextArea;
