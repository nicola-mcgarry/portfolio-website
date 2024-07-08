import Logo from '../../assets/N-M.png'
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.css'
import { Button } from '@mui/material';

const Header = () => {
    return(
        <>
        <div id="header" className="container-fluid sticky-top navbar-inverse g-0">
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
            
            
        </div>
        <div className="sticky-top">
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
                    <button type="button" className="btn-close me-2" data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>
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