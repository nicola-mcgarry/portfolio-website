import './Home.css'


const Home = () => {
    return(
        <div id="home"  className="container-fluid d-flex justify-content-center mb-5">
                    <div className="top-curve">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                    <div className='intro d-flex flex-column p-3 me-5 ms-5'>     
                        <h2>👋 Hi! </h2>           
                        <h1>I'm Nicola,<br/> a <span>Frontend Developer</span></h1>
                        <h2>I code and design things.</h2>
                        <div>
                            <a className='btn btn-primary mt-3 mb-3 me-3' href="#contact">Contact me</a>
                        </div>
                       
                        <div className='ipad-btn'></div>
                    </div>                   
        </div>
    );
};

export default Home;