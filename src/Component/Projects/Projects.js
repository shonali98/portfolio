import React from 'react'
import "../Projects/Projects.css"
import { Cards } from './Cards'
import data from './ProjectsApi'
function Projects() {

  return (
    <>
    <section className='projects top' id='projects'>
        <div className='container'>
            <div className='heading'>
                <h4>Projects</h4>
                
            </div>

            <div className='content grid'>
                {data.map((val,index)=>{
                    return <Cards key={index} image={val.image} title={val.title} desc={val.desc}/>
                })}
                  
            </div>

            
            
        </div>
    </section>
    </>
  )
}

export default Projects