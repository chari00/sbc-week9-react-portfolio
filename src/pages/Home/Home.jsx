
import Header from '../../components/Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <>
     <div id="home" className='flex flex-col'>
     <Header />
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      
    </div>
    </>
  )
}

export default Home
