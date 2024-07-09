import './About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";
const About = () => {
    return(
        <div id="about" className='container d-flex flex-column'>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center'>
                    <div className='p-4'>
                            <p>Hi there! I'm a Front End Developer with 5 years of commercial experience. My coding journey began as a self-taught enthusiast, and in 2019, I was fortunate enough to land an apprenticeship that solidified my passion for software development. Although I've been trained in full stack development, my heart is set on front end, and that's where I'm focusing my skills.</p>
                            <p>Thanks to my full stack background, I bring a unique perspective to front end development, ensuring that my projects are not only beautiful but also efficient and user-friendly. I'm always excited to learn new things and keep up with the latest trends and technologies in the industry.</p>
                            <p>When I'm not coding, you can find me enjoying a good cup of coffee, gaming, or hitting the gym. Personal development is super important to me, so I'm always looking for ways to grow both professionally and personally. I'm excited about the future and can't wait to see what new challenges and opportunities lie ahead!</p>               
                    </div>
                </div>
            </div>
             <div className="row ms-4 me-4">
                <div className='col-md-12'>
                    <div className='pt-3' >
                        <div className='row d-flex flex-row '> 
                            <div className='d-flex justify-content-center'>
                                <FaHtml5 size={40} className="col me-3 mb-3 skill-icon"/>
                                <FaSass size={40} className="col me-3 mb-3 skill-icon"/>
                                <FaCss3Alt size={40} className="col mb-3 me-3 skill-icon"/>
                                <FaBootstrap size={40} className="col mb-3 me-3 skill-icon"/>
                                <FaReact size={40} className="col me-3 mb-3 skill-icon"/>
                                <SiTypescript size={40} className="col mb-3 me-3 skill-icon"/>
                                <SiJavascript size={40} className="col mb-3 me-3 skill-icon"/>
                                <SiCsharp size={40} className="col me-3 mb-3 skill-icon"/>
                                <SiMysql size={40} className="col me-3 mb-3 skill-icon"/>
                                <FaAngular size={40} className="col me-3 mb-3 skill-icon"/>
                            </div>                           
                        </div>
                            
                    </div>
                </div>      
            </div>
            
                    
        </div>
    );
};

export default About;