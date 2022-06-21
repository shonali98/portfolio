import React, { useState } from 'react'
import "./Contact.css"

import Contact1 from '../pic/contact.png'

export const Contact = () => {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        subject:"",
        message:"",
    })
    const InputEvent =(event)=>{
        const {name,value}=event.target

        setData((preVal) =>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit= (event) =>{
        event.preeventDefault()
        alert(
            `My name is ${data.fullname},
             My Phone number is ${data.phone},
             My email address is ${data.email},
             My subject on ${data.subject},
             Here is my message I want to say :${data.message}

        `)
    }
  return (
    <section className='Contact' id='contact'>
        <div className='container top'>
            <div className='heading text-center'>
                <h4>Contact </h4>
                <hr/>
                <h1>contact With Me</h1>
            </div>

            <div className='content d_flex'>
                <div className='left'>
                    <div className='box box_shadow'>
                        <img src={Contact1} width='100px' height='100px' alt=""/>

                    </div>
                    <div className='details'>
                        <h1>Shonali Nethmika</h1>
                        <p> I am available for freelance work. connect with the via and call in to my account</p>

                        <br/>

                        <p>phone: 0771985367</p>
                        <p>Email:shonalinethmika998@gmail.com</p>
                        <br/>
                        <span>Find With Me</span>
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

                        

                    </div>
                </div>

                <div className='right box_shadow'>
                    <form onSubmit={formSubmit} action='https://formsubmit.co/shonalinethmika998@gmail.com' method='post'>
                        <div className='f_flex'>
                            <div className='input row'>
                                <span>Your Name</span>
                                <input type='text' name='fullname' value={data.fullname} onChange={InputEvent}/>
                            
                            </div>
                            <div className='input row'>
                                <span>Your Number</span>
                                <input type='phone' name='phone' value={data.phone} onChange={InputEvent}/>
                            
                            </div>

                            <div className='input row'>
                                <span>Email</span>
                                <input type='email' name='email' value={data.email} onChange={InputEvent}/>
                            
                            </div>

                            <div className='input row'>
                                <span>subject</span>
                                <input type='text' name='subject' value={data.subject} onChange={InputEvent}/>
                            
                            </div>

                            <div className='input row'>
                                <span>Your Message</span>
                                <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}/>
                            
                            </div>

                            <button className='btn_shadow'>
                                SEND MESSAGE
                                <i className='fa fa-long-arrow-down'></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
