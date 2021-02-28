import React from "react";

const TextArea = (props) => {

  return (
    <div className="form-group">
      <textarea placeholder={props.placeholder } className="form-control" rows={props.rows}></textarea>
    </div>
  );
};

export default TextArea;
