import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    if (name && email && message) {
      setFormMessage(`Köszönjük, hogy megkerestél bennünket, ${name}!`);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setFormMessage('Kérlek minden mezőt tölts ki!');
    }
  };
  
  return (
    <div>
      <h3 className="mb-3">Írj nekünk</h3>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">Teljes név</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="form-control" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Email cím</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="form-control" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">Üzenet</label>
          <textarea 
            id="message" 
            name="message" 
            className="form-control" 
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit" className="btn btn-lg btn-block btn-light">Küldés</button>
      </form>
      {formMessage && <p className="text-white mt-3">{formMessage}</p>}
    </div>
  );
}

export default ContactForm;