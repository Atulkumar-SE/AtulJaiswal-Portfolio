import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../Images/logo.png'
import cycling from '../../Images/cycling.gif'
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
 const [isOpen,setIsOpen]= useState(false);
 const handleClick=()=>setIsOpen(!isOpen); 

  return (
    <div className="H_Container">
        <div className="Logo">
        <img src={logo} alt="logo" />
            <h1>Atul Kumar</h1>
        </div>
        <div className="Navbar">
       
            <ul className={isOpen? "menuItem active" : "menuItem"}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Experience'>Experience</Link></li>
                <li><Link to='/Project'>Projects</Link></li>
                <li><Link to='/Research'>Research</Link></li>
                <li><Link to='/Education'>Education</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li ><DarkModeToggle/></li>
                <li><img src={cycling} alt="cycling" className='cycling'/></li>
                
            </ul>

        </div>
            <div className='Hamburger' onClick={handleClick}>{isOpen ? (<FaTimes/>) : (<FaBars />)} </div>

    </div>
  )
}

export default Header