import pp from '../assets/images/pp.jpg'
import '../styles/Header.css';

const Header = () => {

  return (
    <section id='header'>
      <header>
        <div className='header-top-left'>
          <h1>Boudier Antony</h1>
          <h2>Développeur Web</h2>
          <h2>20 ans</h2>
        </div>
        <div className='header-top'>
          <img src={pp} alt='Photo de profil'></img>
        </div>
      </header>
    </section>
  );
}


export default Header;
