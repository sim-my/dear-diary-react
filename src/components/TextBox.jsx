import React from "react";

const TextBox = React.forwardRef((props, ref) => {
  return (
    <div className="form-group pb-2">
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default TextBox;
