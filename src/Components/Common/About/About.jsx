import React from 'react'
import './About.css'
import Tags from '../../UI/Tags/Tags'

const About = () => {
  return (
    <div className="About">
        <div className="about-left">
            <div className="about-left-heading">WHO ?</div>
        </div>

        <div className="about-right">
            <div className="about-right-heading">About me</div>
            <p>I'm <span className='highlighted-txt'>Mohamed Anas</span>, a self-taught frontend developer with a focus on frontend development. Over the past 1 year, I've honed my skills in HTML, CSS, JavaScript, and React.</p>
            <div className="about-right-skills">
              <Tags value={"HTML"} />
              <Tags value={"CSS"} />
              <Tags value={"JS"} />
              <Tags value={"React"} />
              <Tags value={"Git"} />
              <Tags value={"UI/UX"} />
            </div>

        </div>
    </div>
  )
}

export default About