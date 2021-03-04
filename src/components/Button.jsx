const Button = (props) => {
  return (
    <button
      className={props.class}
      onClick={props.onClick}
      type={props.type}
    >
      {props.label}
    </button>
  );
};

export default Button;
