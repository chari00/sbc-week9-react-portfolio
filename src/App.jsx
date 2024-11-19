
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './pages/Contact/Contact'
import NavBar from './components/Navigation/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <>
    
    <NavBar/>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
