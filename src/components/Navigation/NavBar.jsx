import { Link } from "react-router-dom";
import "./Navbar.css";
import tempLogo from '../../assets/bouncy-avatar.png'
import { Button } from "@material-tailwind/react";


const NavBar = () => {
  return (
    <>
      <nav>
        <div>
            <img className="temp-logo" src={tempLogo} alt={tempLogo.name}/>
        </div>
        <div className="navLinks" >
            <Link to="/">Home</Link>|
            <Link to="/about">About</Link>|
            <Link to="/projects">Projects</Link>
            {/* |<Link to="/experience">Experience</Link> */}
        </div>
        <Button>
          <Link to="/contact">Contact me</Link>
        </Button>
      </nav>
    </>
  );
};

export default NavBar;
