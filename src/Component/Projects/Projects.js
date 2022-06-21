import React from 'react'
import "../Projects/Projects.css"
import { Cards } from './Cards'
import data from './ProjectsApi'
import image from '../pic/ArtOfTravel.png'
import Quiz from '../pic/Quiz.png'
import Shopping from '../pic/shopping.png'

const images = [image, Quiz, Shopping];


function Projects() {

  return (
    <>
    <section className='projects top' id='projects'>
        <div className='container'>
            <div className='heading'>
                
                <h4>Projects</h4>
                <hr/>
                
            </div>

            <div className='content grid'>
            
                {data.map((val,index)=>{
                    
                    return <Cards key={index} image={images[val.id]} title={val.title} desc={val.desc}/>
                    
                })}
                  
            </div>

            
            
        </div>
    </section>
    </>
  )
}

export default Projects