const Button = ({ actionOnClick, value, className }) => {
  return (
    <>
      <button className={className} onClick={actionOnClick}>
        {value}
      </button>
    </>
  );
};

export default Button;
