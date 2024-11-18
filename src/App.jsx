
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Contact from './pages/Contact/Contact'

function App() {
//this is serves as the home page
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        {/* the about, projects / gallery, experience will route here */}
      </Routes>
      <div>About</div>
      <div>Projects / gallery</div>
      <div>Experience</div>
      <Footer/>
    </>
  )
}

export default App
