import React from 'react'
import './Footer.css'

const Footer = () => {

  const date = new Date();
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="footer-links">
                <a href='#about'>About Me</a>
                <a href='#works'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>

            <div className="footer-copyright">
                <div>© {date.getFullYear()} Mohamed Anas - All rights reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer