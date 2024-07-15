import ACNH from '../../assets/thumbnails/ACNH.svg'
import portfolio from '../../assets/thumbnails/Portfolio.svg'
import Expectancy from '../../assets/thumbnails/Expectancy.svg'
import COOKFOOD from '../../assets/thumbnails/Cook.svg'
import EscapeArcade from '../../assets/thumbnails/EscapeArcade.svg'
import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import './Projects.css'


const Projects: React.FC = () => {

    return(
        <div id="projects" className="container d-flex flex-column justify-content-center mt-5 ">
            <div className='row d-flex justify-content-evenly'>
                <h1>Personal Projects</h1>
                <p>Projects I've coded and designed</p>
                    <div className='col project p-2 mb-3 pb-3'>
                        <img src={ACNH} alt="ACNH" className='img-thumbnail'/>                    
                        <div className='row d-flex align-items-center pt-3'>
                            <div className='col d-flex justify-content-start'>
                                <a type="button" href="https://github.com/nicola-mcgarry/acnh-pocket-guide" target="_blank" rel="noopener noreferrer" className=" btn btn-primary projectLink me-2">GitHub</a>
                                <a type="button" target="_blank" rel="noopener noreferrer" href="https://acnh-pocket-info-guide.netlify.app/" className=" btn btn-primary projectLink me-2">Project</a>
                                <a type="button" target="_blank" rel="noopener noreferrer" href="https://acnh-pocket-info-guide.netlify.app/" className=" btn btn-primary projectLink me-2">Process</a>    
                            </div>
                            <div className="col d-flex justify-content-md-end justify-content-sm-start">
                                <SiJavascript size={20} className="me-3 skill-icon"/>
                                <FaBootstrap size={20} className="me-3 skill-icon"/>
                                <FaHtml5 size={20} className="me-3 skill-icon"/>
                                <FaCss3Alt size={20} className="me-3 skill-icon"/>
                            </div>   
                        </div>
                    </div>
                    <div className='col project p-2 mb-3 pb-3'>
                        <img src={portfolio} alt="portfolio" className='img-thumbnail'/>                    
                        <div className='row d-flex align-items-center pt-3'>
                            <div className='col d-flex'>
                                <a type="button" href="https://github.com/nicola-mcgarry/Portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">GitHub</a>
                                <a type="button" href="#home" target="_blank" className="btn btn-primary projectLink me-2">Project</a>
                                <a type="button" target="_blank" rel="noopener noreferrer" href="https://acnh-pocket-info-guide.netlify.app/" className=" btn btn-primary projectLink me-2">Process</a>                            
                            </div>
                            <div className='col d-flex justify-content-md-end justify-content-sm-start'>                                
                                <SiTypescript size={20} className="me-3 skill-icon"/>
                                <FaBootstrap size={20} className="me-3 skill-icon"/>
                                <FaHtml5 size={20} className="me-3 skill-icon"/>
                                <FaSass size={20} className="me-3 skill-icon"/>
                            </div>
                        </div>
            
                    </div>            
            </div>
            <div className='row d-flex justify-content-around mt-5'>
                <h1>Work Experiance</h1>
                <p>Projects and features i have worked on while being employed by the company's mentioned that i am proud of.</p> 
                 <h6>All rights reserved to company's mentioned.</h6>
                <div className='col project p-2 mb-3 pb-3'>
                    <img src={Expectancy} alt="Expectancy" className='img-thumbnail'/>                    
                    <div className='row d-flex align-items-center pt-3'>
                        <div className='col d-flex'>
                            <a type="button" href="https://www.expectancy.co.uk/" target="_blank" rel="noopener noreferrer"  className="btn btn-primary projectLink me-2">Website</a>
                            <a type="button" target="_blank" href="#contact" className="btn btn-primary projectLink me-2">More Info</a> 
                        </div>                       
                        <div className='col d-flex justify-content-md-end justify-content-sm-start'>
                                <SiCsharp size={25} className="me-3 skill-icon"/>
                                <FaBootstrap size={25} className="me-3 skill-icon"/>
                                <FaHtml5 size={25} className="me-3 skill-icon"/>
                                <FaCss3Alt size={25} className="me-3 skill-icon"/>
                        </div> 
                    </div>
                </div>
                {/* <div className='col project p-2 mb-3 pb-3'>
                    <img src={EscapeArcade} alt="EscapeArcade" className='img-thumbnail'/>                    
                    <div className='row d-flex align-items-center pt-3'>
                        <div className='col d-flex'>
                            <a type="button" target="_blank" href="#contact" className="btn btn-primary projectLink me-2">More Info</a> 
                        </div>                       
                        <div className='col d-flex justify-content-md-end justify-content-sm-start'>
                                <SiCsharp size={25} className="me-3 skill-icon"/>
                                <FaBootstrap size={25} className="me-3 skill-icon"/>
                                <FaHtml5 size={25} className="me-3 skill-icon"/>
                                <FaCss3Alt size={25} className="me-3 skill-icon"/>
                        </div> 
                    </div>
                </div> */}
                <div className='col project p-2 mb-3 pb-3'>
                    <img src={COOKFOOD} alt="cookfood" className='img-thumbnail'/>                     
                    <div className='row d-flex align-items-center pt-3'>
                        <div className='col d-flex'>
                            <a href="https://www.cookfood.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">Website</a>
                            <a href="#contact" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">More Info</a> 
                        </div>                        
                        <div className='col d-flex justify-content-md-end justify-content-sm-start'>
                                <SiTypescript size={25} className="me-3 skill-icon"/>
                                <FaReact size={25} className="me-3 skill-icon"/>
                                <FaSass size={25} className="me-3 skill-icon"/>
                            </div>
                    </div>        
                </div>            
            </div>
        </div>
    );
};

export default Projects;