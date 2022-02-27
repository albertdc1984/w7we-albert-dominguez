const Button = ({ classname, actionOnClick, text }) => {
  return (
    <button className={classname} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
