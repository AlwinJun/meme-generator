import { useState } from 'react';
import Button from './Button';
import memesData from '../memesData';
import './meme.css';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getImage = (e) => {
    e.preventDefault();
    const memes = allMemeImages.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    const memeUrl = memes[random].url;
    // console.log(memeUrl);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeUrl,
      };
    });
  };

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form__input" />
        <input type="text" placeholder="Bottom text" className="form__input" />
        <Button handleClick={getImage} />
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="memes" />
        <p className="meme__text top">Alwin</p>
        <p className="meme__text bottom">Jun</p>
      </div>
    </main>
  );
};

export default Meme;
