import "./Button.css";

const Button = ({ id, text, action }) => {
  const handleAction = (e) => {
    action();
  };

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  );
};

export default Button;
