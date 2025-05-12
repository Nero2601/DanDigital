import ContactForm from './ContactForm';

function Footer({ navigateTo }) {
  return (
    <section className="colored-section" id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4">Kövess minket</h3>
            <a href="https://twitter.com" style={{ display: 'inline-block' }}>
              <i className="footer-ico fa-brands fa-twitter" style={{ color: '#EEEEEE', fontSize: '1.5rem', margin: '0 10px' }}></i>
            </a>
            <a href="https://facebook.com" style={{ display: 'inline-block' }}>
              <i className="footer-ico fa-brands fa-facebook-f" style={{ color: '#EEEEEE', fontSize: '1.5rem', margin: '0 10px' }}></i>
            </a>
            <a href="https://instagram.com" style={{ display: 'inline-block' }}>
              <i className="footer-ico fa-brands fa-instagram" style={{ color: '#EEEEEE', fontSize: '1.5rem', margin: '0 10px' }}></i>
            </a>
            <a href="mailto:info@dandigital.com" style={{ display: 'inline-block' }}>
              <i className="footer-ico fa-sharp fa-solid fa-envelope" style={{ color: '#EEEEEE', fontSize: '1.5rem', margin: '0 10px' }}></i>
            </a>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a 
                  className="text-white" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                >
                  Főoldal
                </a>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <a 
                  className="text-white" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
                >
                  Szolgáltatások
                </a>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item">
                <a 
                  className="text-white" 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                >
                  Kapcsolat
                </a>
              </li>
            </ul>
            <p className="mt-2">© DigiSuite by DanDigital</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Footer