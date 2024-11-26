import { Link } from "react-router-dom";
import "./Footer.css";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between pl-5 pr-5 bg-black">
        <Typography color="white" className="font-normal">
          &copy; {new Date().getFullYear()} Chari Cruz | Junior Full Stack
          Developer
        </Typography>
        <section className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <Link to="/">
            <Typography
              as="a"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </Link>
          <Link to="/about">
            <Typography
              as="a"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </Typography>
          </Link>
          <Link to="/projects">
            <Typography
              as="a"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Projects
            </Typography>
          </Link>

          <Link to="/contact">
            <Typography
              as="a"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact
            </Typography>
          </Link>
        </section>
      </footer>
      {/* <footer>
        <div className="divider"></div>
        <small className="copyright">
          &copy; {new Date().getFullYear()} Chari Cruz | Junior Full Stack
          Developer
        </small>

      </footer> */}
    </>
  );
};

export default Footer;
