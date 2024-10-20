import React from 'react'
import './Contact.css'
import { CiMail } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="Contact">
        <div className="contact-container">
            <div className="small-txt">Get in <span >Touch</span></div>
            <div className="contact-title">Contact Me</div>
            <div className="contact-box">
                <CiMail className='mail-icon' />
                <div className='email-txt'>mohamed.anas.17a@gmail.com</div>
            </div>
            <div className="contact-social-icons">
                <a href="https://www.linkedin.com/in/md-anas1/" target='blank'><IoLogoLinkedin className='linkedin-icon social-icon'/></a>
                <a href="https://github.com/Mr-Anas1/" target='blank'><BsGithub className='github-icon social-icon'/></a>
            </div>



            
        </div>
    </div>
  )
}

export default Contact