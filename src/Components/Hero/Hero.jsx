import React from 'react'
import './Hero.css'
import main from '../../Assets/main.png'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <div className="hero-txt-container">
          <div className="hero-txt">Hello,I'm </div>
          <div className="hero-txt"> <span className='color-txt'>Mohamed Anas</span></div>
          <div className="hero-txt">Frontend Developer</div>
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