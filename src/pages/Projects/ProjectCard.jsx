import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import axios from "axios";
import { useEffect, useState } from "react";
const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/chari00/repos"
        );
        const { data } = response;
        console.log(response);
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError("Could not connect to GitHub repos", error);
        setLoading(false);
      }
    };
    getProject();
  }, []);
  if (loading)
    return <Typography className="text-center">Loading...</Typography>;
  if (error)
    return (
      <Typography className="text-center text-red-500">{error}</Typography>
    );
  if (projects.length === 0)
    return <Typography className="text-center">No projects found.</Typography>;

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().startsWith("sbc-")
  );

  return (
    <section className="project-card flex justify-evenly items-center flex-wrap gap-4">
      {filteredProjects.map((project) => (
        <Card key={project.id} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {project.name}
            </Typography>
            <Typography>
              {project.description
                ? project.description.length > 70
                  ? project.description.slice(0, 67) + "..."
                  : project.description
                : "Description not available"}
            </Typography>
            <Typography>
              Language: {project.language || "Language not specified."}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-row justify-around items-center">
            {project.homepage ? (
              <Button variant="filled" size="sm">
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferer"
                  className="text-white"
                >
                  Deployed website
                </a>
              </Button>
            ) : (
              <Button disabled title="No deployed website available">
                No deployed site
              </Button>
            )}
            <Button variant="filled" size="sm">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                GitHub Repo
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default ProjectCard;
