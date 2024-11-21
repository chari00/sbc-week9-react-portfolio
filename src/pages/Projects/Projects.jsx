import ProjectCard from "./ProjectCard";
import { CardSpotlight } from "../../components/ui/CardSpotlight";
import "./Project.css";
const Projects = () => {
  return (
    <>
      <section className="projects-container">
        <h1>Projects</h1>
        <div className="spotlight-project flex justify-around items-center">
        <CardSpotlight className="h-96 w-96">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          My Journey began
        </p>
        <div className="text-neutral-200 mt-4 relative z-20">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur reiciendis tenetur illum ex nisi, temporibus at et perferendis, eius doloremque ipsum atque molestiae quas, omnis necessitatibus est dolore amet.</p>

        </div>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur reiciendis tenetur illum ex nisi, temporibus at et perferendis, eius doloremque ipsum atque molestiae quas, omnis necessitatibus est dolore amet.
        </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Authentication steps
        </p>
       
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Ensuring your account is properly secured helps protect your personal
          information and data.
        </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
        <p className="text-xl font-bold relative z-20 mt-2 text-white">
          Authentication steps
        </p>
        {/* <div className="text-neutral-200 mt-4 relative z-20">
          Follow these steps to secure your account:
          <ul className="list-none  mt-2">
            <Step title="Enter your email address" />
            <Step title="Create a strong password" />
            <Step title="Set up two-factor authentication" />
            <Step title="Verify your identity" />
          </ul>
        </div> */}
        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
          Ensuring your account is properly secured helps protect your personal
          information and data.
        </p>
        </CardSpotlight>
      </div>

        <section className="projects">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </section>
    </>
  );
};

export default Projects;
