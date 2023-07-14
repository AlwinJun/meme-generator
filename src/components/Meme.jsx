import { useState } from 'react';
import memesData from '../memesData';
import './meme.css';

const Meme = () => {
  const [imageUrl, setImageUrl] = useState('');

  const getImage = (e) => {
    e.preventDefault();
    const memes = memesData.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    setImageUrl(memes[random].url);
  };

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form__input" />
        <input type="text" placeholder="Bottom text" className="form__input" />
        <button className="form__button" onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </form>
      {imageUrl && <img src={imageUrl} className="meme-image" alt="memes" />}
    </main>
  );
};

export default Meme;
