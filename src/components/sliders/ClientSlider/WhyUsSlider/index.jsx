import React from 'react'
import whyUsData from '../../../../data/whyUs.data'

const WhyUsSlider = () => {
  return (
    <div className='choice__slider owl-carousel owl-theme wow animate__animated animate__fadeInUp'>
        {whyUsData.map((item, index) => (
            <div key={index} className='choice__slider__item'>
              <img src={item.image} alt='Secure Payments' />
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default WhyUsSlider