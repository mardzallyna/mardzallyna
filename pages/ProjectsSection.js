import { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Import the Bootstrap Modal component

const ServicesSection = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="projects" className="py-5" style={{ backgroundColor: 'black' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-white">Projects</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#333' }}>
              <img 
                src="/images/s1.png" 
                className="card-img-top" 
                alt="Project 1" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShow('/images/s1.png')}
              />
              <div className="card-body">
                <h3 className="card-title text-white">Project I</h3>
                <p className="card-text text-white text-left">The platform is designed to provide a seamless and engaging ebook reading experience, offering a wide range of titles and genres through an intuitive interface.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#333' }}>
              <img 
                src="/images/s2.png" 
                className="card-img-top" 
                alt="Project 2" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShow('/images/s2.png')}
              />
              <div className="card-body">
                <h3 className="card-title text-white">Project II</h3>
                <p className="card-text text-white"> an online marketplace where artists can showcase, sell, and promote their artwork in a beautifully designed and user-friendly environment.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#333' }}>
              <img 
                src="/images/s3.png" 
                className="card-img-top" 
                alt="Project 2" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShow('/images/s3.png')}
              />
              <div className="card-body">
                <h3 className="card-title text-white">Project III</h3>
                <p className="card-text text-white"> a vibrant website for a burger joint, offering a menu of delicious burgers, sides, and drinks. Customers can explore the menu, place orders online, and learn about the restaurant’s unique offerings and promotions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#333' }}>
              <img 
                src="/images/s4.png" 
                className="card-img-top" 
                alt="Project 2" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShow('/images/s4.png')}
              />
              <div className="card-body">
                <h3 className="card-title text-white">Project IV</h3>
                <p className="card-text text-white"> a cozy coffee shop website where visitors can explore a menu of artisanal coffees, teas, and delectable food options. The site offers details about the shop’s ambiance, special events, and the story behind its unique blends.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#333' }}>
              <img 
                src="/images/s5.png" 
                className="card-img-top" 
                alt="Project 2" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShow('/images/s5.png')}
              />
              <div className="card-body">
                <h3 className="card-title text-white">Project V</h3>
                <p className="card-text text-white">is a professional website for a health practitioner focusing on holistic wellness and personal development. It features resources for maintaining mental and physical health.








</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#333' }}>
              <img 
                src="/images/s6.png" 
                className="card-img-top" 
                alt="Project 3" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleShow('/images/s6.png')}
              />
              <div className="card-body">
                <h3 className="card-title text-white">Project VI</h3>
                <p className="card-text text-white"> a comprehensive showcase of the individual's skills, projects, and accomplishments. It highlights their expertise in web development, design, and project management. </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Modal for displaying the carousel */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={currentImage} className="d-block w-100" alt="Carousel Image" />
              </div>
              {/* Add more carousel items here if needed */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only"></span>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default ServicesSection;
