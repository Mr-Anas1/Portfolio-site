import React from 'react'
import './Tags.css'

const Tags = ({value}) => {
  return (
    <div className="Tags">
        <button className='tag-btn'>{value}</button>
    </div>
  )
}

export default Tags