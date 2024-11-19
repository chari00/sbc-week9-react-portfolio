import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="divider"></div>
        <small className="copyright">
          &copy; {new Date().getFullYear()} Chari Cruz | Junior Full Stack
          Developer
        </small>

      </footer>
    </>
  );
};

export default Footer;
