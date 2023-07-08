import React, { useState, useEffect } from 'react'
import './DarkModeToggle.css'

const DarkModeToggle = () => {

  const [theme, setTheme] = useState("light_Theme");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  
  
  // with if else

  // const toggleTheme = () => {
  //     if (theme === "dark_Theme"){
  //       setTheme("light_Theme");
  //     } else {
  //       setTheme("dark_Theme");
  //     }
  // };

  // with Turnery Operator
  const toggleTheme = () => {
  theme === "dark_Theme" ? setTheme("light_Theme") : setTheme("dark_Theme");
};

  return (
    <div className="wrapper">
  <input type="checkbox" id="hide-checkbox" onClick={() => toggleTheme()}/>
  <label htmlFor="hide-checkbox" className="toggle">
    <span className="toggle-button">
      <span className="crater crater-1" />
      <span className="crater crater-2" />
      <span className="crater crater-3" />
      <span className="crater crater-4" />
      <span className="crater crater-5" />
      <span className="crater crater-6" />
      <span className="crater crater-7" />
    </span>
    <span className="star star-1" />
    <span className="star star-2" />
    <span className="star star-3" />
    <span className="star star-4" />
    <span className="star star-5" />
    <span className="star star-6" />
    <span className="star star-7" />
    <span className="star star-8" />
  </label>
</div>

  )
}

export default DarkModeToggle