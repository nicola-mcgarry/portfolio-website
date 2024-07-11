import OpenCV from '../openCV';
import './Home.css'

const Home = () => {
    return(
        <div id="home"  className="container"> 
            <div className='row d-flex justify-content-evenly hero align-items-center'>
                        <div className='col d-flex flex-column'>     
                            <h1><span>Frontend Developer</span></h1>
                            <h1 className=''>Curious Designer</h1>
                            <h1>Gamer..</h1>
                            <div className='d-flex'>
                                <a className='btn btn-primary contact mt-3 mb-3 me-3' href="#projects">Projects</a>
                                <OpenCV  />
                            </div>
                        </div>      
                        
                </div>            
                           
        </div>
    );
};

export default Home;