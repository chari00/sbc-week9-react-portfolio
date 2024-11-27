import ProjectCard from "./ProjectCard";
import { Vortex } from "../../components/ui/Vortex";

const Projects = () => {
  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4"
      >
        <section className="projects pt-28 max-w-[1400px]">
          <h1 id="projects" className="mb-8">
            Projects
          </h1>
          <ProjectCard />
        </section>
      </Vortex>
    </>
  );
};

export default Projects;
