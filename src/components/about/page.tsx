import Image from "next/image"
import Image1 from"../../../public/home1.jpg"
import "../css-styles/about.css"
export default function About (){
    return(
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <Image 
                src={Image1} 
                alt="About Me" 
                width={200} 
                height={200}
                className="image"/>
                {/* <span className="circle-spin"></span> */}
            </div> 

            <div className="about-content">
                <h3 className="h3">Frontent Developer</h3>
                <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos officiis labore repudiandae assumenda iusto eligendi accusamus, reiciendis nam nobis ab quo odit optio. Deleniti quam earum aperiam inventore maiores eius modi consectetur quos optio.</p>
            </div>

        </section>
    )
}