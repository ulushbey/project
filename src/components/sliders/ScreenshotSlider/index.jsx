import React from 'react'
import screenshotData from '../../../data/screenshot.data'

const ScreenshotSlider = () => {
  return (
    <div className='shot__slider__wrapper wow animate__animated animate__fadeInUp'>
          <div className='shot__slider owl-carousel owl-theme'>
          {screenshotData.map((item, index) => (
             <div key={index} className='shot__item'>
              <img src={item} alt='Screenshot'
              />
            </div>
          ))}
          </div>
          <div className='slide__button'>
            <a
              href='javascript:void(0)'
              className='prev'
            >
              <img
                src='assets/images/screenshot/arrow.png'
                alt='Previous'
              />
            </a>
            <a
              href='javascript:void(0)'
              className='next'
            >
              <img
                src='assets/images/screenshot/arrow.png'
                alt='Next'
              />
            </a>
          </div>
          <img
            src='assets/images/screenshot/dev.png'
            alt='Device'
            className='device'
          />
        </div>
  )
}

export default ScreenshotSlider