import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
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


const App = () => {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <BottomUp/>
    <Footer/>
    </Router>
  )
}

export default App