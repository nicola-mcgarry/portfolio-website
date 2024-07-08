import ACNH from '../../assets/thumbnails/ACNG-Pocket.png'
import portfolio from '../../assets/thumbnails/portfolio-website.png'
import Expectancy from '../../assets/thumbnails/Expectancy.png'
import COOKFOOD from '../../assets/thumbnails/COOKFOOD.png'
import './Projects.css'
const Projects = () => {
    return(
        <div id="projects" className="container d-flex flex-column justify-content-center mt-5">
            <div className='row d-flex justify-content-evenly'>
                <h1>Personal Projects</h1>
                <p>Projects I've coded and designed</p>
                    <div className='col project p-3 mb-3 pb-3 me-1 ms-1'>
                        <img src={ACNH} alt="ACNH" className='projectImg img-thumbnail'/>
                        <h5 className='pt-3 ms-2'>ACNH - Pocket Guide (WIP)</h5>
                        <div className='row ms-2  d-flex justify-content-evenly'>
                            <div className="col btn btn-disabled disabled me-3 mt-3">React</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">JavaScript</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">CSS</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">BootStrap</div>
                        </div>
                        <div className='d-flex justify-content-evenly pt-3'>
                            <a type="button" href="https://github.com/nicola-mcgarry/acnh-pocket-guide" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-1">GitHub</a>
                            <a type="button" href="https://acnh-pocket-info-guide.netlify.app/" className="btn btn-primary projectLink me-1">Project</a>
                        </div>
                    </div>
                    <div className='col project p-3 mb-3 pb-3 me-2 ms-2'>
                        <img src={portfolio} alt="portfolio" className='projectImg img-thumbnail p-2'/>
                        <h5 className='pt-3 ms-2'>Portfolio Website</h5>
                        <div className='row ms-2  d-flex justify-content-evenly'>
                            <div className="col btn btn-disabled disabled me-3 mt-3">React</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">TypeScript</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">CSS</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">BootStrap</div>
                        </div>
                        <div className='d-flex justify-content-evenly pt-3'>
                            <a type="button" href="https://github.com/nicola-mcgarry/Portfolio" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink me-2">GitHub</a>
                            <a type="button" href="#home" className="btn btn-primary projectLink me-2">Project</a>
                        </div>
            
                    </div>            
            </div>
            <div className='row d-flex justify-content-evenly mt-5 '>
                <h1>Comerical Experiance</h1>
                <p>Projects and features i have worked on while being employed by the company's mentioned that i am proud of.</p> 
                 <h6>All rights reserved to company's mentioned.</h6>
                <div className='col project commercial p-3 mb-3 pb-3 mt-3 me-2 ms-2'>
                    <img src={Expectancy} alt="Expectancy" className='projectImg img-thumbnail p-2'/>               
                        <h5 className='pt-3 ms-2'>Project: New Website Design</h5>
                        <p className='ms-2'>Company: <a href="https://happensoftware.com/" rel="noopener noreferrer" target="_blank" className='Link'>Happen Software</a></p>
                 
                    <div className='row ms-2 d-flex justify-content-evenly'>
                            <div className="col btn btn-disabled disabled me-3 mt-3">MVC</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">C#</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">CSS</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">BootStrap</div>
                    </div>
                    <div className='d-flex justify-content-evenly pt-3'>
                        <a type="button" href="https://www.expectancy.co.uk/" target="_blank" rel="noopener noreferrer"  className="btn btn-primary projectLink">Website</a>
                        <a type="button" href="#contact" className="btn btn-primary projectLink">Find out More</a> 
                    </div>
                </div>
                <div className='col project commercial p-3 mb-3 pb-3 mt-3 me-2 ms-2'>
                    <img src={COOKFOOD} alt="cookfood" className='projectImg img-thumbnail p-2'/>
                        <h5 className='pt-3 ms-2'>New Hero for Landing Page - Frontend</h5>
                        <p className='ms-2'>Company: <a href="https://www.cookfood.net/" rel="noopener noreferrer" target="_blank" className='Link'> COOKFOOD Trading Ltd</a></p>
                 
                    <div className='row ms-2  d-flex justify-content-evenly'>
                            <div className="col btn btn-disabled disabled me-3 mt-3">React</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">TypeScript</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">SASS</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">C#</div>
                    </div>
                    <div className='d-flex justify-content-evenly pt-3'>
                        <a  href="https://www.cookfood.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary projectLink">Website</a>
                        <a href="#contact" className="btn btn-primary projectLink">Find out More</a> 
                    </div>
        
                </div>            
            </div>
        </div>
    );
};

export default Projects;