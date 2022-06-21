import React from 'react'
import "./Home.css"
import hero from "../pic/hero.JPEG"
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
// import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
  return (
    <>
    
    <section className='hero' id='home'>
        <div className='container f_flex top'>
            <div className='left top'>
                <h3>WELCOME </h3>
                <h1> Hi, I'm <span>Shonali Nethmika</span></h1>
                <h2>
                    a 
                    <span>
                     &nbsp; B.Sc. Undergraduate at University Of Peradeniya
                    </span>
                </h2>
                
                
                <div className='hero_btn d_flex'>
                    <div className='col_1'>
                        <h4>Find With Me</h4>
                        <div className='button'>

                        <a href='https://www.instagram.com/shonu_neth/' target='_blank'>
                            <button  className='btn_shadow instagram'>
                                <i className='fab fa-instagram'></i>
                            </button>
                        </a>

                        <a href='https://www.linkedin.com/in/shonali-nethmika-4984a6207/' target='_blank'>
                            <button className='btn_shadow linkedin'>
                                <i className='fab fa-linkedin-in'></i>
                            </button>
                        </a>

                        <a href='https://github.com/shonali98/' target='_blank'>
                            <button className='btn_shadow github'>
                                <i className='fab fa-github'></i>
                            </button>
                        </a>   
                        </div>
                    </div>
                    <div className='col_1'>
                        <h4>
                            Best Skill ON
                        </h4>
                        <button className='btn_shadow'>
                                <img src={skill1} alt='' width='100px' height='100px'/>
                        </button>

                        <button className='btn_shadow'>
                                <img src={skill2} alt='' width='100px' height='100px'/>
                        </button>

                        <button className='btn_shadow'>
                                <img src={skill3} alt='' width='100px' height='100px' />
                        </button>
                    </div>
                </div>
            </div>

            <div className='right_img'>
                <img src={hero} alt=''  />
            </div>
        </div>

    
    </section>
    </>
  )
}

export default Home