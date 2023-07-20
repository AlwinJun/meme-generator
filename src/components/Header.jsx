import trollFace from '../assets/troll-face.png';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <img src={trollFace} className="header__img" />
        <h1 className="header__title">Meme of the Day</h1>
      </div>
      <p className="header__project">React Project 3</p>
    </header>
  );
};

export default Header;
