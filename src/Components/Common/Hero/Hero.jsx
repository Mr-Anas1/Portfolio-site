import React from 'react'
import './Hero.css'
import main from '../../../Assets/main.png'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <div className="hero-txt-container">
          <div className="hero-txt">Hello,I'm </div>
          <div className="hero-txt"> <p className='color-txt'>Mohamed Anas</p></div>
          <div className="hero-txt">Frontend Developer</div>
          <a href="#contact"><button className='main-btn btn' >Contact</button></a>
        </div>
          
      </div>

      <div className="hero-right">
        <div className="hero-right-img">
          <img src={main} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Hero