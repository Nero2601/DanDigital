function FeatureItem({ icon, title, description }) {
  return (
    <div className="col-lg-4">
      <i className={`fa-solid ${icon} fa-4x features-fa`}></i>
      <h3>{title}</h3>
      <p className="features-p">{description}</p>
    </div>
  );
}

export default FeatureItem;