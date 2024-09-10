import styles from '@/styles/Home.module.css'; // Import CSS modules for component-level styling
const ContactSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile', icon: 'bi-linkedin' },
    { name: 'WhatsApp', href: 'https://wa.me/your-number', icon: 'bi-whatsapp' },
    { name: 'Instagram', href: 'https://www.instagram.com/your-profile', icon: 'bi-instagram' },
    { name: 'Twitter', href: 'https://twitter.com/your-profile', icon: 'bi-twitter' },
    { name: 'Gmail', href: 'mailto:your-email@gmail.com', icon: 'bi-envelope' },
    { name: 'Telegram', href: 'https://t.me/your-profile', icon: 'bi-telegram' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="text-start mb-4 text-light">Get in Touch</h2>
        <p className="text-start text-light mb-4">Connect with me through my social media channels.</p>
        <div className="text-start ">
          {socialLinks.map(({ name, href, icon }) => (
            <a 
              key={name} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-light mx-2" // Changed to btn-outline-light for better visibility on dark background
              aria-label={name}
            >
              <i className={`bi ${icon} fs-3`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
