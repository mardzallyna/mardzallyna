import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported globally
import styles from '@/styles/Home.module.css'; // Import CSS modules for component-level styling
import Spline from '@splinetool/react-spline';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CertifSection from './CertifSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Footer from './footer';
import SkillHighlights from './SkillHighlights';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Navbar />
      <main id='home' className={`${styles.main} ${inter.className}`}>
        <div className={styles['spline-container']}>
          <Spline scene="https://prod.spline.design/TStfOMYGGSvMBfAI/scene.splinecode" />
        
        </div>
      </main>
      <HeroSection />
      <SkillHighlights/>
      <CertifSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
  
        {/* Toast notification with custom size 
          <div
            className="toast toast-demo position-absolute top-0 start-50 translate-middle-x d-flex align-items-center text-black bg-light border-0 fade show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ marginTop: '10px', width: '17%', height: '25px', padding: '5px' }} // Adjust size here
          >
            <div className="toast-body fs-10">
              Scroll down
            </div>
            <button
              type="button"
              className="btn-close btn-close-black ms-auto me-2"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>*/}