import avatar from "../../assets/bouncy-avatar.png";
import "./Header.css";
import { Link } from "react-router-dom";
import QrCode from "../Buttons/QrCode";
// import { Boxes } from "../ui/BoxesCore";

const Header = () => {
  return (
    <>
      <section className="hero-banner">
          {/* <Boxes className="opacity-40" /> */}
        <section className="avatar-container">
          <img className="avatar" src={avatar} alt={avatar.name} />
        </section>
        <section>
          <h1>
            Hi I&apos;m <span className="chari">Chari</span>
          </h1>
          <p>Junior Full Stack Developer</p>
          <div className="cv-contact">
            <QrCode />
            <button>
              <Link to="/contact">Contact me</Link>
            </button>
            {/* github icon and linkedin icon below the contact button */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;
