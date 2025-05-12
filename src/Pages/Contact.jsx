//import { useState } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <section className="white-section" id="contact" style={{ paddingTop: '120px', minHeight: '70vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="section-heading">Kapcsolat</h2>
            <p>Keressen minket bizalommal az alábbi elérhetőségeken:</p>
            
            <div className="mt-4">
              <h4>Elérhetőségeink</h4>
              <p><i className="fa-solid fa-envelope me-2"></i> Email: info@dandigital.com</p>
              <p><i className="fa-solid fa-phone me-2"></i> Telefon: +36 1 234 5678</p>
              <p><i className="fa-solid fa-location-dot me-2"></i> Cím: 1234 Budapest, Példa utca 1.</p>
            </div>
            
            <div className="mt-4">
              <h4>Nyitvatartás</h4>
              <p>Hétfő - Péntek: 9:00 - 17:00</p>
              <p>Hétvégén: Zárva</p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Küldjön üzenetet</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;