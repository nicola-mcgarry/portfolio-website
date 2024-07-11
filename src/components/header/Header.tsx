import Logo from '../../assets/NMLogoW.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Header.css'
import { Button } from '@mui/material';

const Header = () => {
    return(
        <>
        <div id="header" className="container-fluid navbar-inverse g-0">
            <nav className="navbar d-flex align-items-center ps-5 pe-5">
                <img src={Logo} alt="logo"/>
                    <ul className="nav-links-desk d-flex gap-4 pt-2 align-content-end align-items-center">
                        <li >
                            <a className='nav-link' href="#home">Home</a>
                        </li>
                        <li >
                            <a className='nav-link' href="#about">About</a>
                        </li>
                        <li>
                            <a className='nav-link' href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className='nav-link' href="#contact">Contact</a>
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
                    <img src={Logo} alt="logo" className='me-auto'/>
                    <Button className="hamburger d-flex justify-content-end" data-bs-toggle="offcanvas" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-label="Toggle navigation">
                        <RxHamburgerMenu style={{fontSize: 40}}/>
                    </Button>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" id="navbarToggleExternalContent">
                <div className="offcanvas-header">
                    <img src={Logo} alt="logo" className='me-auto'/>
                    <Button data-bs-dismiss="offcanvas" aria-label="Close">
                        <IoIosCloseCircleOutline size={30} className='icon-close'/>
                    </Button>
                </div>           
                <ul className="pt-2 d-flex flex-column justify-content-end">
                        <li >
                            <a className='nav-link' href="#home">Home</a>
                        </li>
                        <li >
                            <a className='nav-link' href="#about">About</a>
                        </li>
                        <li>
                            <a className='nav-link' href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className='nav-link'>Contact</a>
                        </li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Header;