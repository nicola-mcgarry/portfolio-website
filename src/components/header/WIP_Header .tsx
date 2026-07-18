import Logo from '../../assets/NMLogoW.png'
//import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Header.css'
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailTo from "../contact/MailTo";
import { MdEmail } from "react-icons/md";


const WIP_Header = () => {
    return (
        <>
            <div id="header" className="container-fluid navbar-inverse g-0">
                <nav className="navbar d-flex align-items-center ps-5 pe-5">
                    <img src={Logo} alt="logo" />
                    <ul className="contact-links">
                        <li >
                            <a href="https://www.linkedin.com/in/nicola-mcgarry-b198118a/"
                                rel="noopener noreferrer"
                                target='_blank'

                                title="linkedIn">
                                <LinkedInIcon className='wip-icon' />
                            </a>
                        </li>
                        <li >
                            <MailTo label={<MdEmail />} mailto="mailto:nicolaemcgarry@gmail.com" className='wip-icon' />
                        </li>
                    </ul>
                </nav>
                <div className="top-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

            </div>
            <div >
                <nav className="navbarMob align-items-center ps-3 pe-3 pt-2">
                    <div className="d-flex align-items-center ">
                        <img src={Logo} alt="logo" className='me-auto' />
                       <ul className="contact-links">
                        <li >
                            <a href="https://www.linkedin.com/in/nicola-mcgarry-b198118a/"
                                rel="noopener noreferrer"
                                target='_blank'

                                title="linkedIn">
                                <LinkedInIcon className='wip-icon' />
                            </a>
                        </li>
                        <li >
                            <MailTo label={<MdEmail />} mailto="mailto:nicolaemcgarry@gmail.com" className='wip-icon' />
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default WIP_Header;