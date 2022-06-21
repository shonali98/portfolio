import React from 'react';
import '../Education/Education.css'
import degree from '../pic/degree.png'
import certificate from '../pic/certificate.png'
import award from '../pic/award.png'

const Education = () => {
  return (
    <>
    
    <section className="Education top" id='Education' >
        <div className='container'>
        
            <div className='heading'>
            
                <h4>Education</h4>
                <hr/>
                <h1>What I Do</h1>
            </div>

            <div className='content grid'>
              <div className='box btn_shadow'>
                <img src={degree} alt='' width='50px' height='50px' />
                <h2>B.Sc.Computation & Management</h2>
                <p> At University Of Peradeniya</p>
              </div>

              <div className='box btn_shadow'>
                <img src={degree} alt='' width='50px' height='50px' />
                <h2>Charted Accountancy(Part Qualified)</h2>
                <p> At CA Sri Lanka</p>
              </div>

              <div className='box btn_shadow'>
                <img src={degree} alt='' width='50px' height='50px' />
                <h2>AAT(past finalist)</h2>
                <p> At AAT Sri Lanka</p>
              </div>

              <div className='box btn_shadow'>
                <img src={certificate} alt='' width='50px' height='50px' />
                <h2>Python programming</h2>
                <p> At University Of Moratuwa</p>
              </div>

              <div className='box btn_shadow'>
                <img src={certificate} alt='' width='50px' height='50px' />
                <h2>java script, react+redux ,HTML , Java programming</h2>
                <p> At Sololearn</p>
              </div>

              <div className='box btn_shadow'>
                <img src={certificate} alt='' width='50px' height='50px' />
                <h2>Java programming</h2>
                <p> At Great Learning</p>
              </div>

              <div className='box btn_shadow'>
                <img src={certificate} alt='' width='50px' height='50px' />
                <h2>International Business I & II </h2>
                <p> At Coursera</p>
              </div>

              <div className='box btn_shadow'>
                <img src={certificate} alt='' width='50px' height='50px' />
                <h2>Project Management</h2>
                <p> At Coursera</p>
              </div>

              <div className='box btn_shadow'>
                <img src={award} alt='' width='50px' height='50px' />
                <h2>CSUP Bootcamp 2.0</h2>
                <p> Computer Society at University Of Peradeniya</p>
              </div>

              <div className='box btn_shadow'>
                <img src={award} alt='' width='50px' height='50px' />
                <h2>Hackerthon Code Fiesta 2021</h2>
                <p> Computer Society at University Of Peradeniya</p>
              </div>

            </div>
        </div>

    </section>
    </>
  )
}

export default Education