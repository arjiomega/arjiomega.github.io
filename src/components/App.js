import React from 'react';
import { Nav } from "./Nav";
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects, ProjectsTemp } from './Projects';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { Experience } from './Experience';
import { Education } from './Education';


const App = () => {
  return (
    
    // <div>
    //   <Nav />
    //   <section id="about"><Header /></section>
    //   <section id="skills"><Skills /></section>
    //   <section id="experience"><Experience /></section>
    //   <section id="education"><Education /></section>
    //   <section id="projects"><Projects /></section>
    //   <section id="contact"><Contacts /></section>
    //   <Footer />
    // </div>

    <div>
      <Nav/>
      <section>
        <Header/> 
        
        <Skills/>
        <Experience/>
        <Education/>
        {/* <ProjectsTemp/> */}
        <Projects/> 
        
        <Contacts/>
        <Footer/>
      </section>
      
      
    </div>
    
  
      
  )
}

export default App;