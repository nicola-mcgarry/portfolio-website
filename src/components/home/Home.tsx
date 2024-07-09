import './Home.css'


const Home = () => {
    return(
        <div id="home"  className="container-fluid d-flex justify-content-center mb-5">
             
                    <div className='intro d-flex flex-column p-3 me-4 ms-4'>     
                        <h1>I'm Nicola,<br/> <span>Frontend Developer</span></h1>
                        <h2>I code and design things.</h2>
                        <div className='d-flex ustify-content-center'>
                            <a className='btn btn-primary contact mt-3 mb-3' href="#projects">Projects</a>
                        </div>
                    </div>                   
        </div>
    );
};

export default Home;