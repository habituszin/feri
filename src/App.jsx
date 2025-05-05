import './App.css'
import Catalog from './Catalog';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Welcome from './Welcome';

function App() {

  return (
    <>
      <header>
        <nav>
          <img className='nav-logo' src="/logo.png" alt="Logo"/>
          <div>
            <a
              href="/"
              className={location.pathname === '/' ? 'selected' : ''}
            >
              Főoldal
            </a>
            <a
              href="/catalog"
              className={location.pathname === '/catalog' ? 'selected' : ''}
            >
              Katalógus
            </a>
            <a
              href="/about"
              className={location.pathname === '/about' ? 'selected' : ''}
            >
              Rólunk
            </a>
            <a
              href="/contact"
              className={location.pathname === '/contact' ? 'selected' : ''}
            >
              Kapcsolat
            </a>
          </div>
        </nav>
      </header>
      <main>
        {location.pathname === '/' && Welcome()}
        {location.pathname === '/catalog' && Catalog()}
        {location.pathname === '/about' && AboutUs()}
        {location.pathname === '/contact' && Contact()}
      </main>
    </>
  );
}

export default App
