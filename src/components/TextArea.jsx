import React from "react";

const TextArea = React.forwardRef((props, ref) => {

  return (
    <div className="form-group">
      <textarea
        ref={ref}
        placeholder={props.placeholder}
        className="form-control"
        rows={props.rows}
      ></textarea>
    </div>
  );
});

export default TextArea;
