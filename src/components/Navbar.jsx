function Navbar({ navigateTo, currentPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#222831', padding: '1rem 0' }}>
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#" 
          onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
          style={{ fontFamily: 'Ubuntu', fontSize: '2.5rem', fontWeight: 'bold' }}
        >
          DigiSuite
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-text" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
              >
                Főoldal
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'services' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
              >
                Szolgáltatások
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
              >
                Kapcsolat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar