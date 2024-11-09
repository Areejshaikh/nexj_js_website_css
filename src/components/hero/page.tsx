import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


import { AiFillTwitterCircle } from "react-icons/ai";



import "../css-styles/hero.css"
import { FaLinkedin } from "react-icons/fa6";
function Hero() {
    return (

        <section className="hero" id="hero">
            <div className="hero-content">
                <h1>Hi I&apos;m <span>Areej Zaheer</span></h1>

                <div className="text-animate">
                    <h3>Frontend Developer</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id quos vel minima ipsa omnis quia quaerat quis sint ea. Ipsa, vel nobis.
                    adipisicing elit. Explicabo eligendi excepturi officia voluptates doloremque minima ducimus animi ut.
                </p>

                <div className="btn-box">
                    <Link href={"#"} className="btn">Hire me</Link>
                    <Link href={"#"} className="btn">Let &apos;s Talk</Link>
                </div>
            </div>
            <div className="hero-icon">
                <Link href={"#"} className="icons"> <FaGithub /></Link>
                <Link href={"#"} className="icons"> <FaFacebook /></Link>
                <Link href={"#"} className="icons"> <FaLinkedin/></Link>
                <Link href={"#"} className="icons"> <AiFillTwitterCircle/></Link>
                
            </div>

     

        </section>

    )
}

export default Hero