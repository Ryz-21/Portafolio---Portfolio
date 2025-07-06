import './App.css';
import myImage from './Components/img/myimage.png';
import catIcon from './Components/img/cat icon white.png';

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function App() {
  return (
    <div>
      {/* Navbar fijo arriba */}
      <nav className="nav">
        <button onClick={() => scrollToSection('home')}>
          <img src={catIcon} alt="Home" className="cat-button" />
        </button>
        <button onClick={() => scrollToSection('work')}>work</button>
        <button onClick={() => scrollToSection('about')}>about</button>
        <button onClick={() => scrollToSection('wip')}>wip</button>
        <button onClick={() => scrollToSection('contact')}>contact</button>
      </nav>

      {/* Contenido principal */}
      <div className="container">
        {/* Sección HOME */}
        <section id="home" className="section home-section">
          <div className="main-content">
            <div className="text-section">
              <h1 className="slide-in-left delay-1">Hi I'm Leo Suasnabar.</h1>
              <h2 className="slide-in-right delay-2">A Programmer</h2>
              <p className="slide-in-up delay-3">
                I’m also a front-end developer and general doodler with a keen eye for creating engaging UI,
                bringing products to life.
              </p>
            </div>
            <div className="image-section">
              <img src={myImage} alt="my custom" className="main-image" />
            </div>
          </div>
        </section>

        {/* Otras secciones */}
        <section id="work" className="section">
          <h2 className="slide-in-left delay-1">Work Section</h2>
        </section>

        <section id="about" className="section">
          <h2 className="slide-in-left delay-1">About Section</h2>
        </section>

        <section id="wip" className="section">
          <h2 className="slide-in-left delay-1">WIP Section</h2>
        </section>

        <section id="contact" className="section">
          <h2 className="slide-in-left delay-1">Contact Section</h2>
        </section>
      </div>
    </div>
  );
}

export default App;
