import trollFace from '../assets/troll-face.png';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={trollFace} className="header__img" />
      <h1 className="header__title">Meme Generator</h1>
      <p className="header__project">React Project 3</p>
    </header>
  );
};

export default Header;
