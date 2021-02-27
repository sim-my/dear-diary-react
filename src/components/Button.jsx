const Button = (props) => {
  return (
    <button
      className={props.class}
      onClick={props.handleClick}
      type={props.type}
    >
      {props.label}
    </button>
  );
};

export default Button;
