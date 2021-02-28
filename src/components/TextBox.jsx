const TextBox = (props) => {
  return (
    <div className="form-group pb-2">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextBox;
