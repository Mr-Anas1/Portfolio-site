import React from 'react'
import './Work.css'


const Work = ({img, title, description, link, reverse}) => {
    return (
        <div className="Work">

            <div className={`work-box ${reverse ? "reverse": ""}`}>
                <div className="work-img">
                    <img src={img} alt="frontenlab-img" />
                </div>

                <div className="work-content">
                    <div className="work-content-heading">{title}</div>
                    <p className="work-content-description">{description}</p>
                    <button className="main-btn">Live Site</button>
                </div>
            </div>
        </div>
    )
}

export default Work