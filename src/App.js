import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Experience from './Components/Experience/Experience'
import Research from './Components/Research/Research'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Project from './Components/Projects/Project'
import Header from './Components/BasicBody/Header'
import Footer from './Components/BasicBody/Footer'
import BottomUp from './Components/BasicBody/BottomUp'
import NotFound from './Components/BasicBody/NotFound'


const App = () => {
const isLocalDevelopment = window.location.hostname === 'localhost';
const basename = isLocalDevelopment ? '' : '/AtulJaiswal-Portfolio';
  return (
    <Router basename={basename}>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/404" element={<NotFound />} />
  {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
      </Routes>
      <BottomUp/>
    <Footer/>
    </Router>
  )
}

export default App