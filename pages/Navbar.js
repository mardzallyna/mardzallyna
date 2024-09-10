import { useEffect } from 'react';

const navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) { // Change 50 to whatever scroll distance you want to trigger the effect
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className="navbar navbar-expand-xl navbar-dark bg-none fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand col-3" href="#">Mardz Allyna</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarDark">
          <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active btn btn-outline me-2" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active btn btn-outline me-2" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active btn btn-outline me-2" href="#certif">Certificates</a>
            </li>
            <li className="nav-item"> 
              <a className="nav-link active btn btn-outline me-2" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active btn btn-outline me-2" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
