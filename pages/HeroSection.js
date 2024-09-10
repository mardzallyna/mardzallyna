import React from 'react';


const HeroSection = () => {
  // Function to handle opening the CV
  const handleDownloadCV = () => {
    window.open('/images/cv.pdf');
  };

  // Function to handle navigation to contact section
  const handleContactInfo = () => {
    window.location.href = '#contact';
  };

  // Function to handle social media navigation
  const handleSocialLink = (url) => {
    window.location.href = url;
  };
  return (
    <section id="about" className="py-5 text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container text-center">
      <p className="section_text_p1 text-secondary">Hi,Hello!</p>
        <p className="section_text_p1 text-primary">Get To Know </p>
        <h1 className="title display-4 mb-4">About Me</h1>
        <div className="row align-items-center">
          <div className="col-md-4 mb-4">
            <img
              src="/images/pic.png"
              alt="Profile picture"
              className="img-fluid rounded-circle"
              style={{ width: '500px', height: '600px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-8">
            <div className="row mb-4">
              <div className="col-md-6 mb-4 d-flex flex-column align-items-center">
             
              </div>
            </div>
            <p className="lead">
              They say creativity is intelligence having fun! <br /><br />
              Hey there! Call me Mardz, a frontend web developer with a passion for bringing designs to life. Whether it's crafting pixel-perfect layouts, writing clean and efficient code, or adding a touch of magic with animations, I love making the web a more beautiful place.<br /><br />
              I thrive on creativity and problem-solving, and there's nothing I enjoy more than diving into a new project and seeing where it takes me. From responsive designs to interactive user interfaces, I believe that creativity is the key to making the web more engaging and fun.<br /><br />
              When I'm not coding, you'll find me exploring new coffee shops, reading my favorite books, binge-watching my favorite shows, or daydreaming about my next adventure. I love trying new things and pushing the boundaries of what's possible.<br /><br />
            </p>
         
            <div className="mt-4">
                  <button className="btn btn-secondary me-2" onClick={handleDownloadCV}>
                    Download CV
                  </button>
                  <button className="btn btn-primary" onClick={handleContactInfo}>
                    Contact Info
                  </button>
                </div>
                <div className="mt-4">
                  <img
                    src="/images/linkedin.png"
                    alt="My LinkedIn profile"
                    className="icon me-2"
                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                    onClick={() => handleSocialLink('https://www.linkedin.com/in/mardz-allyna-lidasan-632006263/')}
                  />
                  <img
                    src="/images/github.png"
                    alt="My Github profile"
                    className="icon"
                    style={{ width: '30px', height: '30px', cursor: 'pointer' }}
                    onClick={() => handleSocialLink('https://github.com/mardzallyna?tab=repositories')}
                  />
                  
                </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
