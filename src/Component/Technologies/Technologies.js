import React from "react";
import "../Technologies/Technologies.css"

function Technologies() {
  return (
    <>
    <section className='Technologies top ' id='technologies'>
        <div className="container">
            <div className="heading">
                <h4>Technologies</h4>
                <hr/>
                
            </div>

            <div className=" basic ">
                <h1>Basic</h1>
                <br/>
                <h2>HTML</h2>
                <div className ="myProgress ">
                    <div className="html"  ></div>
                </div>

                <h2>CSS</h2>
                <div className ="myProgress ">
                    <div className="css"  ></div>
                </div>

                <h1>CSS Frameworks</h1>
                <br/>
                <h2>Bootstrap</h2>
                <div className ="myProgress ">
                    <div className="bootstrap"  ></div>
                </div>


                <h1>programming languages</h1>
                <br/>
                <h2>JavaScript</h2>
                <div className ="myProgress ">
                    <div className="js"  ></div>
                </div>

                <h2>Type Script</h2>
                <div className ="myProgress ">
                    <div className="ts"  ></div>
                </div>

                <h1>JavaScript frameworks</h1>
                <br/>
                <h2>React</h2>
                <div className ="myProgress ">
                    <div className="react"  ></div>
                </div>

                <h2>Angular</h2>
                <div className ="myProgress ">
                    <div className="angular"  ></div>
                </div>

                <h1>Tools</h1>
                <br/>
                <h2>VsCode</h2>
                <div className ="myProgress ">
                    <div className="vs"  ></div>
                </div>

                <h2>GitHub</h2>
                <div className ="myProgress ">
                    <div className="github"  ></div>
                </div>

                
                

                
            </div>
        </div>
        
    </section>

    </>
  )
}



export default Technologies