import { useEffect, useRef } from 'react';
import FeatureItem from '../components/FeatureItem';

function Home() {
  const carouselRef = useRef(null);
  
  useEffect(() => {
    // Check if bootstrap is available in window object
    if (window.bootstrap) {
      // Initialize Bootstrap carousel if the element exists
      const carouselElement = document.getElementById('testimonial-carousel');
      if (carouselElement) {
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 5000
        });
        carouselRef.current = carousel;
      }
    }

    return () => {
      // Cleanup if needed
      if (carouselRef.current) {
        // Additional cleanup if required
      }
    };
  }, []);

  return (
    <>
      <section className="colored-section" id="title">
        <div className="container-fluid">
          <div className="row title-row">
            <div className="col-lg-6">
              <h1 className="big-heading">Kész a következő szintre lépni? Digitalizálja vállalkozását most!</h1>
            </div>
            <div className="col-lg-6 img-div">
              <img className="title-image" src="/src/assets/platform.png" alt="platforms-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="white-section" id="features">
        <div className="container-fluid">
          <div className="container-fluid features-container">
            <div className="row">
              <FeatureItem 
                icon="fa-circle-check" 
                title="Egyszerű használat" 
                description="Felületünk egyszerű és felhasználóbarát, így bárki könnyedén kezelheti, technikai tudás nélkül is."
              />
              <FeatureItem 
                icon="fa-bullseye" 
                title="Sokféle felhasználó" 
                description="Platformunkat bármilyen vállalkozás könnyen használhatja, iparágtól függetlenül."
              />
              <FeatureItem 
                icon="fa-heart" 
                title="Garantált működés" 
                description="Megoldásaink megbízhatóan működnek minden vállalkozás számára."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="colored-section" id="testimonials" style={{ backgroundColor: '#76ABAE' }}>
        <div id="testimonial-carousel" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2 className="testimonial-text">Minden információt egy helyen kezelhetek, így soha nem felejtek el semmit! A DigiSuite megoldásaival teljesen átlátható és könnyen kezelhető a vállalkozásom.</h2>
              <img className="testimonials-img" src="/src/assets/man-img1.jpg" alt="man-profile1" />
              <em>Péter, Budapest</em>
            </div>

            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">Amióta a DanDigital megoldásait használjuk, az ügyfelek érdeklődése ötszörösére nőtt! Egyszerű, gyors, és hatékony – csak ajánlani tudjuk!</h2>
              <img className="testimonials-img" src="/src/assets/man-img2.jpg" alt="man-profile2" />
              <em>Sándor, Kaposvár</em>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;