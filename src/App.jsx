import './App.css'

function App() {

  return (
    <>
      <header>
        <nav>
          <img class='nav-logo' src="/logo.png" alt="Logo"/>
          <div>
            <a
              href="/"
              className={location.pathname === '/' ? 'selected' : ''}
            >
              Főoldal
            </a>
            <a
              href="/about"
              className={location.pathname === '/about' ? 'selected' : ''}
            >
              Rólunk
            </a>
            <a
              href="/catalog"
              className={location.pathname === '/catalog' ? 'selected' : ''}
            >
              Katalógus
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
    </>
  );
}

export default App
