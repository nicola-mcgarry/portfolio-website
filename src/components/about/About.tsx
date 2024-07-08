import './About.css'

const About = () => {
    return(
        <div id="about" className='container d-flex flex-column'>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center'>
                    <div className='pod-about p-5 me-5 ms-5'>
                            <p>Hello! I'm an enthusiastic and approachable Software Developer with a strong focus on front-end development. With five years of commercial experience in Full Stack Software Development, I have honed my skills in creating dynamic, user-friendly interfaces that enhance user experience and engagement.</p>
                            <p>My expertise lies in front-end technologies, where I specialize in leveraging HTML, CSS, JavaScript, React, and Angular to build responsive and visually appealing websites and applications. However, my full-stack background allows me to understand the bigger picture and create more efficient and seamless front-end solutions.</p>
                            <p>I thrive in both collaborative team settings and independent projects, always maintaining motivation and a positive attitude. My approach to development is rooted in a balance of creativity and technical proficiency, ensuring that I deliver high-quality, innovative solutions. I am also adept at time-management and organization, which helps me meet deadlines and exceed expectations.</p>               
                    </div>
                </div>
            </div>
             <div className="row">
                <div className='col-md-12'>
                    <div className='pod-skills pt-5 ms-5 me-5' >
                        <div className='row '> 
                            <div className="col btn btn-disabled disabled me-3 mt-3">HTML</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">CSS/SASS</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">BootStrap</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">React</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">TypeScript</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">JavaScript</div>                 
                            <div className="col btn btn-disabled disabled me-3 mt-3">ASP.NET</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">MVC</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">SQL</div>
                            <div className="col btn btn-disabled disabled me-3 mt-3">C#</div>
                           
                        </div>
                            
                    </div>
                </div>      
            </div>
            
                    
        </div>
    );
};

export default About;