import About from "../components/about/page"
import Contact from "../components/contact/page"
import Education from "../components/education/page"
import { Header } from "../components/header/page"
import Hero from "../components/hero/page"
import { Skills } from "../components/skills/page"
export default function Home () {
return(
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Education/>
        <Skills/>
        <Contact/>
    </div>
)
}

