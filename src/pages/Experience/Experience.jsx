import './Experience.css'
const Experience = () => {
  
  const technologies = [
    "HTML5", "CSS3", "JavaScript ES6", "Python", "React Native", 
    "Vite", "NextJs", "Django", "ExpressJs", "Figma", 'WordPress',
    "BrowserStack", "Sentry", 'Supabase'
  ];

  return (
    <>
    <div className="experience">
      <div className="scroll-container">
        <ul>
          {technologies.map((tech, index) => (
            <li key={`tech-${index}`}>{tech}</li>
          ))}
          {technologies.map((tech, index) => (
            <li key={`tech-dup-${index}`}>{tech}</li>
          ))}
             {technologies.map((tech, index) => (
            <li key={`tech-dup-${index}`}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Experience
