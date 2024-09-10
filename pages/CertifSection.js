import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported globally

const AboutSection = () => {
  return (
    <section id="about" className="py-5 text-white" style={{ background: 'rgb(7, 0, 44)' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-light">CERTIFICATIONS</h2>
        <p className="text-center text-light pb-5">
          Empowering skills through continued education. A glimpse of my certifications that showcase my dedication to growth.
        </p>

        {/* Carousel for certifications */}
        <div id="certif" className="carousel slide" data-bs-ride="carousel" style={{ position: 'relative', maxWidth: '800px', margin: 'auto' }}>
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#certificationsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#certificationsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#certificationsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#certificationsCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          <div className="carousel-inner" style={{ borderRadius: '25px', overflow: 'hidden', boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.8)' }}>
            {/* Carousel item 1 */}
            <div className="carousel-item active">
              <img
                src="/images/c1.jpg"
                className="d-block w-100"
                alt="Certification 1"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>

            {/* Carousel item 2 */}
            <div className="carousel-item">
              <img
                src="/images/c2.jpg"
                className="d-block w-100"
                alt="Certification 2"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>

            {/* Carousel item 3 */}
            <div className="carousel-item">
              <img
                src="/images/c3.JPG"
                className="d-block w-100"
                alt="Certification 3"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>

            {/* Carousel item 4 */}
            <div className="carousel-item">
              <img
                src="/images/c4.png"
                className="d-block w-100"
                alt="Certification 4"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#certif" data-bs-slide="prev">
            <span className="bi bi-arrow-left-circle-fill" style={{ fontSize: '2rem', color: 'black' }} aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#certif" data-bs-slide="next">
            <span className="bi bi-arrow-right-circle-fill" style={{ fontSize: '2rem', color: 'black' }} aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
