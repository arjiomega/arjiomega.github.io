import { Header } from "./_components/Header"
import { Skills } from "./_components/Skills"
import { Experience } from "./_components/Experience"
import { Education } from "./_components/Education"
import { Projects } from "./_components/Projects"
import { Contacts } from "./_components/Contacts"

export default function Home() {
  return (
    <div>
        <Header/>
        <Skills/>
        <Experience/>
        <Education/>
        <Projects/> 
        <Contacts/>  
    </div>
    
  )
}
