import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
// import {Vortex} from './components/ui/Vortex'
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/Navigation/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
// import { Boxes } from "./components/ui/BoxesCore";

function App() {
  return (
    <>
      {/* <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      > */}
      
        <NavBar />
        <Header />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      {/* </Vortex> */}
    </>
  );
}

export default App;
