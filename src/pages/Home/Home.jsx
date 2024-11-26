
import Header from '../../components/Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
// import NavBar from '../../components/Navigation/NavBar';
// import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
     <div id="home" className='flex flex-col'>
     {/* <NavBar /> */}
     <Header />
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      {/* <Footer /> */}
      
    </div>
    </>
  )
}

export default Home
