import React from "react";

const TextArea = React.forwardRef((props, ref) => {

  return (
    <div className="form-group">
      <textarea
        ref={ref}
        placeholder={props.placeholder}
        className="form-control"
        name={props.name}
        rows={props.rows}
        defaultValue={props.defaultValue}
      ></textarea>
    </div>
  );
});

export default TextArea;
