import React from "react";
import "./Experience.css";
import experinceHero from "../../Images/experinceHero.png";
import WorkExperience from "../../ReusableComponent/WorkExperienceCard/WorkExperience";

const Experience = () => {
  return (
    <div className="w-[90%] text-[color:var(--black)]  m-auto flex flex-col gap-1">
      {/* -----------------------Experience Hero ------------------------- */}
      <div className="flex flex-col-reverse sm:flex-row  h-[90vh] sm:h-[80vh]  justify-center items-center">
        <div className="w-[100%] sm:w-[50%] ">
          <img src={experinceHero} alt="hero" className="w-[100%] " />
        </div>
        <div className="w-[100%] sm:w-[50%] text-center py-10">
          <div className="text-[2.5rem] font-semibold">
            My <span className="text-[#622AFF]">Experience</span>
          </div>
          <p className="text-[1.2rem] font-medium">
            Go for it. No matter how it ends, it was an experience. – Anonymous
          </p>
        </div>
      </div>
      {/* -----------------------Work Experience------------------------- */}
      <div className="flex flex-col items-center">
        <h1 className="text-[2.5rem] font-semibold">
          Work <span className="text-[#622AFF]">Experience</span>
        </h1>
        <div className="py-20">
          <WorkExperience />
        </div>
      </div>
    </div>
  );
};

export default Experience;
