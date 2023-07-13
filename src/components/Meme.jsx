import './meme.css';

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form__input" />
        <input type="text" placeholder="Bottom text" className="form__input" />
        <button className="form__button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
};

export default Meme;
