import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <Card>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Full Stack
          </Typography>
          <Typography className="about-text">
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the ma
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
            night life in Barcelona.The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the ma
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
