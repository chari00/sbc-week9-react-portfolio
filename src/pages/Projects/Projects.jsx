import ProjectCard from "./ProjectCard";
import { CardSpotlight } from "../../components/ui/CardSpotlight";
import "./Project.css";
import { Vortex } from "../../components/ui/Vortex";
// import { WobbleCard } from "../../components/ui/WobbleCard";

const Projects = () => {
  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <section className="projects-container">
          <h1 className="mb-8">Projects</h1>
          <div className="spotlight-project flex justify-around items-center">
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                 Project 1
              </p>
              <div className="text-neutral-200 mt-4 relative z-20">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam aspernatur reiciendis tenetur illum ex nisi,
                  temporibus at et perferendis, eius doloremque ipsum atque
                  molestiae quas, omnis necessitatibus est dolore amet.
                </p>
              </div>
              
            </CardSpotlight>
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Project 2
              </p>

              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam aspernatur reiciendis tenetur illum ex nisi, temporibus
                at et perferendis, eius doloremque ipsum atque molestiae quas,
                omnis necessitatibus est dolore amet.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-96 w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Project 3
              </p>

              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam aspernatur reiciendis tenetur illum ex nisi, temporibus
                at et perferendis, eius doloremque ipsum atque molestiae quas,
                omnis necessitatibus est dolore amet.
              </p>
            </CardSpotlight>
          </div>

          <section className="projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </section>
        </section>
      </Vortex>
    </>
  );
};

export default Projects;
