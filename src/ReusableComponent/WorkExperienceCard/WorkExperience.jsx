import React from 'react'
import { Card } from './Card';
import content from './Content';


const WorkExperience = () => {
  
  return (
    <div className="flex flex-col gap-20" >
    {content.map(contents =>(
        <Card key={contents.id}
            jobtitle={contents.jobtitle}
            company={contents.company}
            duration={contents.duration}
            responsibility={contents.responsibility}
            brandlogo={contents.brandlogo}
         />
    ))}
    </div>

  )
}

export default WorkExperience