import ServiceCard from '../components/ServiceCard';

function Services() {
  const basicFeatures = [
    'Egyszerű weboldal',
    'Naptár funkciók',
    'Automatizált véleménykezelés'
  ];

  const startFeatures = [
    'Összetett weboldal',
    'További automatizált folyamatok',
    'AI Chatbot',
    'Az Alapcsomag tartalma'
  ];

  const enterpriseFeatures = [
    'Egyedi weboldal',
    'Egyedi automatizált feladatok',
    'AI alapú megoldások',
    'Konzultációk'
  ];

  return (
    <section className="white-section" id="pricing" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-heading mb-3">Egy csomag minden igényhez</h2>
        <p className="mb-5">Egyszerű és megfizethető árképzési csomagok Önnek és vállalkozásának.</p>
        
        <div className="row">
          <div className="pricing-column col-lg-4 col-md-6 mb-4">
            <ServiceCard 
              title="Alapcsomag" 
              price="19.990Ft / Hó" 
              features={basicFeatures} 
            />
          </div>
          
          <div className="pricing-column col-lg-4 col-md-6 mb-4">
            <ServiceCard 
              title="Start Csomag" 
              price="39.990Ft / Hó" 
              features={startFeatures} 
              isPrimary={true}
            />
          </div>
          
          <div className="pricing-column col-lg-4 mb-4">
            <ServiceCard 
              title="Vállalati Csomag" 
              price="Egyedi árajánlat" 
              features={enterpriseFeatures} 
              isPrimary={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;