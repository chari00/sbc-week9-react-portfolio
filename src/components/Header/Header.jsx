import avatar from "../../assets/bouncy-avatar.png";
import "./Header.css";
import { Link } from "react-router-dom";
import QrCode from "../Buttons/QrCode";
import { Vortex } from "../ui/Vortex";
import Experience from "../../pages/Experience/Experience";
import { Button } from "@material-tailwind/react";

// import { Boxes } from "../ui/BoxesCore";

const Header = () => {
  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={50}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <section className="hero-banner">
          {/* <Boxes className="opacity-1" /> */}
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
              <Button>
                <Link to="/contact">Contact me</Link>
              </Button>
              {/* github icon and linkedin icon below the contact button */}
            </div>
          </section>
        </section>
        <Experience />
      </Vortex>
    </>
  );
};

export default Header;
