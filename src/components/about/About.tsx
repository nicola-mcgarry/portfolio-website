import './About.css'
import { CiCoffeeCup } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";




const About = () => {
    return(
        <div id="about" className='container-fluid d-flex flex-column p-5'>
            <div className='row'>
                <div className='col-md-12 col-lg-12 d-flex justify-content-evenly'>                                    
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <h1 className='mb-2'>Get to know me</h1>
                            <p>I've been a developer since 2019, and I’ve been passionate about technology since the days of Windows 95 using the dinosour Gateway 2000. But let's be honest, I mainly used Paint and played The Sims when it came out in 2000!</p>
                            <p>As for most, the idea of becomming a programmer sparked an interest when the first Matrix film came out. even though our day-to-day isn't as action packed, I started my coding journey using Free Code Camp, and in 2019 i turned my passion into a career with an apprenticceship that solidified my love for software developent.</p>
                            <p>I’ve always been someone who has both a creative and a logical side. While I have full stack training, my passion is front end development. My full stack background provides a unique perspective, ensuring everything I build is both functional and visually appealing.</p>               
                            <p>When I'm not coding and fueled by coffee. I'm gaming, or hitting the gym. Personal development is super important to me, so I'm always looking for ways to grow both professionally and personally. I'm excited about the future and can't wait to tackle new challenges and opportunities in this ever-evolving industry.  </p>
                    </div>   
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='widget-background mt-2'>
                            <p><CiLocationOn className='icon'/> Location</p>
                            <p className='mb-0'>Kent, UK</p>
                        </div>
                          <div className='widget-background'>
                            <p><FaCodeBranch className='icon'/> Building</p>
                            <p>Animal Crossing Pocket Tracker</p>
                        </div>
                          <div className='widget-background'>
                            <p><IoGameControllerOutline className='icon'/> Playing</p>
                            <p>Jurassic World Evolution 3</p>
                        </div>
                          <div className='widget-background'>
                            <p><CiCoffeeCup className='icon'/> Fuel</p>
                            <p>6 Shot Blonde White Mocha</p>
                        </div>
                    </div>                                      
                </div>
            </div>                       
        </div>
    );
};

export default About;