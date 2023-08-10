import React from 'react'

const InvestCard = ({item}) => {
  return (
    <div className='invest__feature__item wow animate__animated animate__fadeInUp'>
                      <div className='invest__feature__item__img'>
                        <img src={item.image} alt={item.title}/>
                      </div>
                      <div className='invest__feature__item__content'>
                        <h6>{item.title}</h6>
                        <p>{item.text}
                        </p>
                      </div>
                    </div>
  )
}

export default InvestCard