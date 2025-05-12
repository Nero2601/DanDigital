function ServiceCard({ title, price, features, isPrimary = false }) {
  return (
    <div className="card h-100">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body d-flex flex-column">
        <h2 className="price-text">{price}</h2>
        {features.map((feature, index) => (
          <p key={index}>{feature}</p>
        ))}
        <div className="d-grid gap-2 mt-auto">
          <a 
            href={`mailto:info@dandigital.com?subject=${title}%20érdeklődés&body=Kedves DanDigital,%0A%0AÉrdeklődöm a ${title} iránt. Kérem, vegyék fel velem a kapcsolatot.%0A%0AKöszönettel,`} 
            className={`btn btn-lg btn-block ${isPrimary ? 'btn-dark' : 'btn-outline-dark'}`}
          >
            Érdeklődés
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;