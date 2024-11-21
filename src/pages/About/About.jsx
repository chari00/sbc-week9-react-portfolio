import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./About.css";
import { CardSpotlight } from "../../components/ui/CardSpotlight";

const About = () => {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="flex justify-evenly items-center flex-wrap">
        <CardSpotlight className="h-96 w-96 spotlight-card">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            My Journey began
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              aspernatur reiciendis tenetur illum ex nisi, temporibus at et
              perferendis, eius doloremque ipsum atque molestiae quas, omnis
              necessitatibus est dolore amet.
            </p>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            aspernatur reiciendis tenetur illum ex nisi, temporibus at et
            perferendis, eius doloremque ipsum atque molestiae quas, omnis
            necessitatibus est dolore amet.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96 spotlight-card">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Currently
          </p>

          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I am attending StepUp8 16-week Full Stack Software Development
            Bootcamp.
          </p>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I am attending Step8Up Bootcamp, a comprehensive 16-week Full Stack
            Software Development Skills Bootcamp that covers HTML5, CSS3,
            JavaScript, React, Vite, Jest, Node.js, Python, Django, Git, and
            Agile methodologies, while also providing job readiness training and
            guaranteed job interview opportunities upon completion.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96 spotlight-card">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Future Prospects
          </p>

          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I&apos;m excited about the diverse career paths opening up for me in
            the tech industry. With my full-stack development skills, I could
            start as a junior software developer, working on both front-end and
            back-end projects. I&apos;m particularly interested in front-end
            development, where I can use my HTML, CSS, JavaScript and React
            knowledge to create engaging user interfaces.
          </p>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I&apos;m committed to continuous learning in this fast-paced
            industry, and I&apos;m excited to see where my new skills will take
            me.
          </p>
        </CardSpotlight>
      </div>

      <Card>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Full Stack
          </Typography>
          <Typography className="about-text">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.The place is close to Barceloneta Beach and
            bus stop just 2 min by walk and near to &quot;Naviglio&quot; where
            you can enjoy the ma
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography className="about-text">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.The place is close to Barceloneta Beach and
            bus stop just 2 min by walk and near to &quot;Naviglio&quot; where
            you can enjoy the ma
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default About;
