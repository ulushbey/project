import React from 'react'

const DesignCard = ({item, className}) => {
  return (
    <div className={`design__content__cards__item wow animate__animated animate__fadeInUp ${className}`}>
        <h6>{item.title}</h6>
        <p>{item.text}</p>
    </div>
  )
}

export default DesignCard