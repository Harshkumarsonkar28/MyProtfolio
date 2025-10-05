import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"


function App() {


  return (
  <div className="font-sans">
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/skills" element = {<Skills/>}/>
      <Route path="/projects" element = {<Projects/>}/>
      <Route path="/contact" element = {<Contact/>}/>

    </Routes>
    <footer className="bg-gray-900 text-white py-4 text-center">
        © {new Date().getFullYear()} <span className=" tetx-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent hover:opacity-90">Harsh Kumar Sonkar</span>. All rights reserved.
      </footer>
  </div>

  )
}

export default App
