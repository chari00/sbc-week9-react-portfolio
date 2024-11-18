import avatar from '../../assets/bouncy-avatar.png'
import './Header.css'
import { Link } from "react-router-dom";
import QrCode from '../Buttons/QrCode';


const Header = () => {
return (
<>
<section className="hero-banner" >
  <section className="avatar-container">
    <img className="avatar" src={avatar} alt={avatar.name}/>
  </section>
  <section>
    <h1>Hi I&apos;m <span className='chari'>Chari</span></h1>
    <p>Junior Full Stack Developer</p>
  </section>
</section>
  <div className="cv-contact">
    <QrCode/>
    <Link to='/contact'>
      Contact me
    </Link>
    
    
  </div>
</>
);
};

export default Header;