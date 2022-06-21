import React from 'react';
import Header from './Component/Head/Header';
import './App.css';
import Home from './Component/Home/Home';
import Education from './Component/Education/Education';
import Technologies from './Component/Technologies/Technologies';
import Projects from './Component/Projects/Projects'
import { Contact } from './Component/Contact/Contact';

const App = () => {
  return (
    < >
    <Header />
    <Home />
    <Education />
    <Technologies />
    <Projects/>
    <Contact/>


    
    </>
  )
}

export default App