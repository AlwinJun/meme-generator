import './button.css';

const Button = ({ handleClick }) => {
  return (
    <button className="form__button" onClick={handleClick}>
      Get a new meme image 🖼
    </button>
  );
};

export default Button;
