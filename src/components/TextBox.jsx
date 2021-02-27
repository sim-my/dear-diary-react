const TextBox = (props) => {
  return (
    <input
      type={props.type}
      className={props.class}
      placeholder={props.placeholder}
    />
  );
};

export default TextBox;
