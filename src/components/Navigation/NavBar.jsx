import { Link } from "react-router-dom";
import "./Navbar.css";
import tempLogo from '../../assets/bouncy-avatar.png'

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
            <Link to="/projects">Projects</Link>|
            <Link to="/experience">Experience</Link>
        </div>
        <button>
          <Link to="/contact">Contact me</Link>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
