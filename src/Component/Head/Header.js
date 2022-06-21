import React, { useState } from 'react'
import './Header.css';
import logo from "../pic/logo.png"

const Header = () => {

    //when scroll header at top
    window.addEventListener("scroll",function(){
        const header =document.querySelector(".header")
        header.classList.toggle("active",window.scrollY>100)
    })

    //toggle menu
    const [Mobile,setMobile]=useState(false)
  return (
    <>
        <header className='header ' id='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt='' height="50px" weight="50px" />
                </div>

                <div className='navlink'>
                    {/* <ul className='link f_flex uppercase'> */}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={()=>setMobile(false)}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#Education'>Education</a></li>
                        <li><a href='#technologies'>Technologies</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        
                        <li><a href='#contact'>Contact Me</a></li>

                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close'></i> :<i className='fas fa-bars open'></i>}

                    </button>
                </div>
            </div>
        </header>
        
    </>
  )
}

export default Header