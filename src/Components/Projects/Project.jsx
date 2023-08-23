import React, { useEffect } from 'react'
import './Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import experinceHero from "../../Images/experinceHero.png";
import Projects from '../../ReusableComponent/ProjectCard/ProjectCard';


const Project = () => {
  useEffect(() =>{
    AOS.init({duration:1000})
  },[]);
  return (
      <div className="">
        <div className="w-[90%] text-[color:var(--black)]  m-auto flex flex-col gap-1">
      {/* -----------------------Project Hero ------------------------- */}
      <div className="flex flex-col-reverse sm:flex-row  h-[90vh] sm:h-[80vh]  justify-center items-center">
        <div className="w-[100%] sm:w-[50%] ">
          <img src={experinceHero} alt="hero" className="w-[100%] " />
        </div>
        <div className="w-[100%] sm:w-[50%] text-center py-10">
          <div className="text-[2.5rem] font-semibold">
            My <span className="text-[#622AFF]">Projects</span>
          </div>
          <p className="text-[1.2rem] font-medium">
          My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.
          </p>
        </div>
      </div>
      {/* -----------------------Project Card------------------------- */}
      <div className="flex flex-col items-center">
        <h1 className="text-[2.5rem] font-semibold">
          Work <span className="text-[#622AFF]">Experience</span>
        </h1>
        <div data-aos="fade-up" className="py-20">
          <Projects />
        </div>
      </div>
    </div>
      </div>
    )
}

export default Project