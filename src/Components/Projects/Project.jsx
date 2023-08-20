import React from 'react'
import './Project.css'

const Project = () => {
  return (
      <div className="ProfileCard">
        <div className="profileCard_Inner">
          <div className="profileCard_front">
            <div className='front'>
              <h2>title:Atul</h2>
              <span>profile:Developer</span>
            </div>
          </div>
          <div className="profileCard_back">
            <h1>Atul Jaiswal</h1>
            <h2>Software Engineer</h2>
            <button>Follow</button>
          </div>
        </div>
      </div>
    )
}

export default Project