import ProjectCard from "./ProjectCard"
import './Project.css'
const Projects = () => {
  return (
    <>
    <section className="projects-container">
      <h1>Projects</h1>
        <section className="projects">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
         
        </section>
    </section>
    </>
  )
}

export default Projects
