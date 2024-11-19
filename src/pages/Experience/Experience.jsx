import './Experience.css'
const Experience = () => {
  
  const technologies = [
    "HTML5", "CSS3", "JavaScript ES6", "Python", "React", 
    "Vite", "NextJs", "Django", "ExpressJs", "Figma", 
    "BrowserStack", "Sentry"
  ];

  return (
    <div className="experience section">
      {/* <h1>Technologies</h1> */}
      <div className="scroll-container">
        <ul>
          {technologies.map((tech, index) => (
            <li key={`tech-${index}`}>{tech}</li>
          ))}
          {technologies.map((tech, index) => (
            <li key={`tech-dup-${index}`}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience
