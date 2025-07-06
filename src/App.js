import './App.css';
import myImage from './Components/img/myimage.png';

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
        <button onClick={() => scrollToSection('work')}>work</button>
        <button onClick={() => scrollToSection('about')}>about</button>
        <button onClick={() => scrollToSection('wip')}>wip</button>
        <button onClick={() => scrollToSection('contact')}>contact</button>
      </nav>

      {/* Contenido principal */}
      <div className="container">
        <div className="main-content">
          <div className="text-section">
            <h1>Hi I'm Leo.</h1>
            <h2>A Programmer</h2>
            <p>
              I’m also a front-end developer and general doodler with a keen eye for creating engaging UI,
              bringing products to life.
            </p>
          </div>
          <div className="image-section">
            <img src={myImage} alt="my custom" className="main-image" />
          </div>
        </div>

        {/* Secciones destino */}
        <section id="work" className="section">Work Section</section>
        <section id="about" className="section">About Section</section>
        <section id="wip" className="section">WIP Section</section>
        <section id="contact" className="section">Contact Section</section>
      </div>
    </div>
  );
}

export default App;
