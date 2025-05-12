function Testimonial({ text, image, name, location }) {
  return (
    <div className="carousel-item container-fluid">
      <h2 className="testimonial-text">{text}</h2>
      <img className="testimonials-img" src={image} alt={`${name}-profile`} />
      <em>{name}, {location}</em>
    </div>
  );
}

export default Testimonial;