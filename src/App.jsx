import './App.css'
import Catalog from './Catalog';

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
        {location.pathname === '/' && <h1>Üdvözöljük a Főoldalon!</h1>}
        {location.pathname === '/catalog' && Catalog()}
        {location.pathname === '/about' && <h1>Rólunk szóló információk.</h1>}
        {location.pathname === '/contact' && <h1>Kapcsolat oldal.</h1>}
      </main>
    </>
  );
}

export default App
