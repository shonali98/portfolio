import React from 'react'
import '../Projects/Projects.css'
export const Cards = (props) => {
  return (
    < >
        <div className='box btn_shadow '>
            <img src={props.image}   alt=''/>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>

            <a href=''>
                <i className='fas fa-arrow-right'></i>
            </a>
        </div>
    </ >
  )
}
