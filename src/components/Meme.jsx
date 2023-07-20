import { useState, useEffect } from 'react';
import Button from './Button';
// import memesData from '../memesData';
import './meme.css';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const memeObj = await response.json();
      setAllMemes(memeObj.data.memes);
    })();
  }, []);

  const getImage = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[random].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeUrl,
      };
    });
  };

  const setImageText = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <form className="form">
        <input
          className="form__input"
          type="text"
          onChange={setImageText}
          name="topText"
          value={meme.topText}
          placeholder="Top text"
        />
        <input
          className="form__input"
          type="text"
          onChange={setImageText}
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom text"
        />
        <Button handleClick={getImage} />
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="memes" />
        <p className="meme__text top">{meme.topText}</p>
        <p className="meme__text bottom">{meme.bottomText}</p>
      </div>
    </main>
  );
};

export default Meme;
