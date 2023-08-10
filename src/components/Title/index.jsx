import React from 'react'

const Title = ({upperTitle, title, text, isCenter}) => {
  return (
    <div>
     {upperTitle && (<h6 className={`wow animate__animated animate__fadeInUp ${isCenter ? 'text-center' : ''}`}>{upperTitle}</h6>)}
     <h2 className={`wow animate__animated animate__fadeInUp ${isCenter ? 'text-center' : ''}`}>{title}</h2>
     {text && (<p className={`wow animate__animated animate__fadeInUp} ${isCenter ? 'text-center' : ''}`}>{text}</p>
     )}
    </div>
  )
}

export default Title