import React, { useEffect } from 'react'
import './Navbar.css'
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = () => {

    const [closeIcon, setCloseIcon] = useState(1);
    const [clickChange, setClickChange] = useState(0);

    const handleClick = () => {
        setCloseIcon(closeIcon === 1? 0 : 1);
    }

    const handleClickChange = (value) => {
        setClickChange(value !== undefined ? value : clickChange === 1 ? 0 : 1);
    };

    useEffect(()=>{
        if(clickChange === 1){
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
        }
    },[clickChange])

    return (
        <div className="Navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-name">Mohamed Anas</div>
                </div>

                <div className={`navbar-right ${closeIcon === 0 ? 'navbar-right-mobile' : ''}`}>
                    <div className={`navbar-links ${closeIcon === 0 ? 'navbar-links-mobile' : ''}`}>
                        <li><a href="#about" onClick={()=> {handleClickChange(0); handleClick();}}>About</a></li>
                        <li><a href="#works"  onClick={()=> {handleClickChange(0); handleClick();}}>Projects</a></li>
                        <li><a href="#contact"  onClick={()=> {handleClickChange(0); handleClick();}}>Contact</a></li>
                    </div>
                </div>
                {
                        (closeIcon) ?
                            <RiMenu2Line className="navbar-menu-icon hidden" onClick={() => {handleClick(); handleClickChange()}}/>
                        :
                            <AiOutlineClose className='navbar-menu-icon hidden' onClick={() => {handleClick(); handleClickChange()}} />
                        

                    }
            </div>
        
            <div className="navbar-line"></div>
            
        </div>

    )
}

export default Navbar