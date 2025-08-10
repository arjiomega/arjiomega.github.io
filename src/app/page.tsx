import { Nav } from "./_components/Nav";
import { Header } from "./_components/Header"
import { Skills } from "./_components/Skills"
import { Experience } from "./_components/Experience"
import { Education } from "./_components/Education"
import { Projects } from "./_components/Projects"
import { Contacts } from "./_components/Contacts"
import { Footer } from "./_components/Footer"

export default function Home() {
  return (
    <div>
      <Nav/>
      <section>
        <Header/>
        <Skills/>
        <Experience/>
        <Education/>
        <Projects/> 
        <Contacts/>
        <Footer/>
        {/* <AboutMe/> */}
      </section>
      
    </div>
    
  )
}
