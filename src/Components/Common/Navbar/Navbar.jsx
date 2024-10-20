import React from 'react'
import './Navbar.css'
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {

    const [closeIcon, setCloseIcon] = useState(1);

    const handleClick = () => {
        setCloseIcon(closeIcon === 1? 0 : 1);
    }

    return (
        <div className="Navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-name">Mohamed Anas</div>
                </div>

                <div className={`navbar-right ${closeIcon === 0 ? 'navbar-right-mobile' : ''}`}>
                {console.log(closeIcon)}
                    <div className={`navbar-links ${closeIcon === 0 ? 'navbar-links-mobile' : ''}`}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#works">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>
                    
                </div>
                {
                        (closeIcon) ?
                            <RiMenu2Line className="navbar-menu-icon hidden" onClick={handleClick}/>
                        :
                            <AiOutlineClose className='navbar-menu-icon hidden' onClick={handleClick} />
                        

                    }
            </div>
        
            <div className="navbar-line"></div>

        </div>

    )
}

export default Navbar