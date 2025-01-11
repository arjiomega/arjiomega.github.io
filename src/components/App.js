import React from 'react';
import { Nav } from "./Nav";
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { Experience } from './Experience';
import { Education } from './Education';


const App = () => {
  return (
    
    <div>
      <Nav/>
      <section>
        <Header/> 
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/> 
        <Contacts/>
        <Footer/>
      </section>
      
      
    </div>
    
  
      
  )
}

export default App;