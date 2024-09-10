import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SkillHighlights = () => {
  const skills = [
    { name: 'JavaScript', icon: 'bi bi-filetype-js' },
    { name: 'React', icon: 'bi bi-check-circle' },
    { name: 'Node.js', icon: 'bi bi-hexagon' },
    { name: 'CSS', icon: 'bi bi-filetype-css' },
    { name: 'HTML', icon: 'bi bi-filetype-html' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap' },
    { name: 'Git', icon: 'bi bi-git' },
    { name: 'SQL', icon: 'bi bi-database' },
    { name: 'Microsoft Office', icon: 'bi bi-microsoft' }, // Placeholder icon
    { name: 'Google Suite', icon: 'bi bi-google' }, // Placeholder icon
    { name: 'Figma', icon: 'bi bi-body-text' }, // Figma icon
    { name: 'Spline', icon: 'bi bi-disc' }, // Spline icon
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-dark-emphasis">Skill Highlights</h2>
        <div className="row">
          {skills.map(({ name, icon }) => (
            <div key={name} className="col-md-3 mb-4 text-center">
              <div className="p-3 rounded shadow-sm" >
                <i className={`${icon} fs-2 text-dark`} />
                <p className="mt-2 text-dark">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillHighlights;
