import React from 'react'
import { Card } from './Card';
import content from './Content';


const Projects = () => {
  
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20" >
    {content.map(contents =>(
        <Card key={contents.id}
            thumbnail={contents.thumbnail}
            title={contents.title}
            media={contents.media}
         />
    ))}
    </div>

  )
}

export default Projects