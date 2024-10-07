import React from 'react'
import './Works.css'
import Work from '../../UI/Work/Work'
import learnerr from '../../../Assets/learnerr.png'
import frontenlab from '../../../Assets/frontenlab.png'
import listen from '../../../Assets/listen.png'

const Works = () => {
  return (
    <div className="Works">
        <div className="works-heading">My Works</div>
        <div className="works-container">

          <Work 
            img={frontenlab}  
            title={"Frontenlab"}
            description={"FrontenLab is a platform I built entirely using React, focusing on frontend challenges to help developers improve their skills. It features responsive design and interactive challenges, with all components styled using CSS and managed through React's state management."}
            reverse={false}
            link={"https://www.frontenlab.com/"}
          />

          <Work 
            img={listen}  
            title={"Listen"}
            description={"Listen is a podcast app I started developing using React. While it's still under construction, the current version includes the basic UI setup and navigation. The project doesn't yet integrate with any APIs, but the design and structure are ready for future updates."}
            reverse={true}
          />

          <Work 
            img={learnerr}  
            title={"Learnerr"}
            description={"Learnerr is an online learning platform I created using React. It features dynamic course pages and interactive content, all built with React components. While the project doesn't use any external APIs, it simulates an immersive learning environment through custom state management and routing."}
            reverse={false}
            link={"https://mr-anas1.github.io/Learnerr/"}
          />

        </div>
        
    </div>
  )
}

export default Works