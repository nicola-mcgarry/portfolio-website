import ACNH from '../../assets/thumbnails/ACNG-Pocket.png'
import portfolio from '../../assets/thumbnails/portfolio-website.png'
import Expectancy from '../../assets/thumbnails/Expectancy.png'
import COOKFOOD from '../../assets/thumbnails/COOKFOOD.png'

import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

import './Projects.css'
const Projects = () => {
    return(
        <div id="projects" className="container d-flex flex-column justify-content-center mt-5 ">
            <div className='row d-flex justify-content-evenly  me-4 ms-4'>
                <h1>Personal Projects</h1>
                <p>Projects I've coded and designed</p>
                    <div className='col project p-3 mb-3 pb-3 me-1'>
                        <img src={ACNH} alt="ACNH" className='projectImg img-thumbnail'/>
                        <div className='row mt-3'>
                            <h5>ACNH - Pocket Guide (WIP)</h5>
                            <div className="col d-flex ">
                                <SiJavascript size={20} className="me-3 project-icon"/>
                                <FaBootstrap size={20} className="me-3 project-icon"/>
                                <FaHtml5 size={20} className="me-3 project-icon"/>
                                <FaCss3Alt size={20} className="me-3 project-icon"/>
                            </div>                                
                        </div>
                        <div className='d-flex justify-content-evenly pt-3'>
                            <a type="button" href="https://github.com/nicola-mcgarry/acnh-pocket-guide" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-1">GitHub</a>
                            <a type="button" target="_blank" rel="noopener noreferrer" href="https://acnh-pocket-info-guide.netlify.app/" className="btn btn-primary projectLink me-1">Project</a>
                        </div>
                    </div>
                    <div className='col project p-3 mb-3 pb-3 me-1'>
                        <img src={portfolio} alt="portfolio" className='projectImg img-thumbnail p-2'/>
                        <div className='row mt-3'>
                            <h5>Portfolio Website</h5>                         
                            <div className='col d-flex'>
                                
                                <SiTypescript size={20} className="me-3 project-icon"/>
                                <FaBootstrap size={20} className="me-3 project-icon"/>
                                <FaHtml5 size={20} className="me-3 project-icon"/>
                                <FaSass size={20} className="me-3 project-icon"/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly pt-3'>
                            <a type="button" href="https://github.com/nicola-mcgarry/Portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">GitHub</a>
                            <a type="button" href="#home" target="_blank" className="btn btn-primary projectLink me-2">Project</a>
                        </div>
            
                    </div>            
            </div>
            <div className='row d-flex justify-content-around mt-5 me-4 ms-4'>
                <h1>Comerical Experiance</h1>
                <p>Projects and features i have worked on while being employed by the company's mentioned that i am proud of.</p> 
                 <h6>All rights reserved to company's mentioned.</h6>
                <div className='col project commercial p-3 mb-3 pb-3 mt-3 me-1'>
                    <img src={Expectancy} alt="Expectancy" className='projectImg img-thumbnail p-2'/>                       
                    <div className='row mt-3 d-flex justify-content-evenly'>
                        <h5 >Project: New Website Design</h5>
                        <p>Company: <a href="https://happensoftware.com/" rel="noopener noreferrer" target="_blank" className='Link'>Happen Software</a></p>
                 
                    <div className='col d-flex'>
                                <SiCsharp size={20} className="me-3 project-icon"/>
                                <FaBootstrap size={20} className="me-3 project-icon"/>
                                <FaHtml5 size={20} className="me-3 project-icon"/>
                                <FaCss3Alt size={20} className="me-3 project-icon"/>
                            </div>
                    </div>
                    <div className='d-flex justify-content-evenly pt-3'>
                        <a type="button" href="https://www.expectancy.co.uk/" target="_blank" rel="noopener noreferrer"  className="btn btn-primary projectLink">Website</a>
                        <a type="button" target="_blank" href="#contact" className="btn btn-primary projectLink">Find out More</a> 
                    </div>
                </div>
                <div className='col project commercial p-3 mb-3 pb-3 mt-3 me-1'>
                    <img src={COOKFOOD} alt="cookfood" className='projectImg img-thumbnail p-2'/>
                    <div className='row mt-3 d-flex justify-content-evenly'>
                    <h5>New Hero for Landing Page - Frontend</h5>
                    <p>Company: <a href="https://www.cookfood.net/" rel="noopener noreferrer" target="_blank" className='Link'> COOKFOOD Trading Ltd</a></p>
                    <div className='col d-flex'>
                                <SiTypescript size={20} className="me-3 project-icon"/>
                                <FaReact size={20} className="me-3 project-icon"/>
                                <FaSass size={20} className="me-3 project-icon"/>
                            </div>
                    </div>
                    <div className='d-flex justify-content-evenly pt-3'>
                        <a  href="https://www.cookfood.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink">Website</a>
                        <a href="#contact" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink">Find out More</a> 
                    </div>
        
                </div>            
            </div>
        </div>
    );
};

export default Projects;