import './Footer.css'


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <>
           {/* <div className='pod-footerContact d-flex justify-content-evenly'>
                <div className='mt-3'>
                    <h3>Socials</h3>
                    <div className='d-flex justify-content-center'>
                        <a href="https://www.linkedin.com/in/nicola-mcgarry-b198118a/" 
                            rel="noopener noreferrer" 
                            target='_blank' 
                            className='social me-2'
                            title="linkedIn">
                            <LinkedInIcon className='icon'/>
                        </a>
                        <a href="https://github.com/nicola-mcgarry" 
                            rel="noopener noreferrer" 
                            target='_blank' 
                            className='social me-2'
                            title="gitHub">
                            <GitHubIcon className='icon' />
                        </a>
                        <a href="https://codepen.io/NMcGarry" 
                            rel="noopener noreferrer" 
                            target='_blank' 
                            className='social me-2'
                            title="codePen">
                            <FaCodepen  className='icon' />
                        </a>
                    </div>
                </div>   
                <div className='vr'></div>
                <div className='mt-3'>
                    <h3>Contact</h3>
                    <div className='d-flex justify-content-center'>
                    <MailTo label="Email me"mailto="mailto:nicolaemcgarry@gmail.com"/>
                    </div>
                </div>
            </div>     */}
                <footer className='footer d-flex justify-content-end'> 
                    <div>
                        <p className='copyright align-self-center pe-5 pt-3'>&copy; {currentYear} Nicola McGarry</p>
                    </div>   
            
                </footer>
        </>
       
    );
};

export default Footer;