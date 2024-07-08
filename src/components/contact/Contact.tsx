import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaCodepen } from "react-icons/fa";
import './Contact.css'
import MailTo from './MailTo';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {

    return(
        <div id="contact"  className="container d-flex flex-column justify-content-center p-5" >
                <h1>Get in touch!</h1>
                <div className='row pod-contact d-flex justify-content-evenly p-3 mt-3 pt-4'>
                        <div className='col-sm-6 col-xs-12'>
                            <h2 className='mb-3'>Let's Talk</h2>
                            <p>Availble to work on new projects, drop me a message using the contact form or<MailTo label="message me directly" mailto="mailto:nicolaemcgarry@gmail.com"/></p>
                            <h3 className="mt-5 mb-3">Find me Online</h3>
                            <div className='d-flex mb-5'>
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
                        <div className='col-sm-6 col-xs-12'>
                            <ContactForm />
                        </div>                
                </div>             
        </div>
    );
};

export default Contact;