import React from 'react'
import CheckItem from '../../CheckItem'

const PricingCard = ({item, isSelected}) => {
  return (
    <div className={`pricing__item wow animate__animated animate__fadeInUp 
    ${isSelected? 'pricing__item--standard' : ''}`}>
        <div className={`${isSelected? 'standard__inner' : ''}`}>
            <img src={item.image} alt='Basic'/>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
            <h2>$ {item.price} USD</h2>
            <p>/monthly</p>
            <a href='#'
            className='button'>
            Learn More
            </a>
            <ul>
                {item.features.map((feature, index) => (
                <CheckItem title={feature} key={index}/> 
                ))}
            </ul>
        </div>
        </div>
  )
}

export default PricingCard