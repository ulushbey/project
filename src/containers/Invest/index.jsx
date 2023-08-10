import React from 'react'
import Title from '../../components/Title'
import investData from '../../data/invest.data'
import InvestCard from '../../components/cards/InvestCard'

const Invest = () => {
  return (
    <section
        className='invest'
        id='features'
      >
        <div className='container'>
          <div className='invest__area'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-5 d-none d-lg-block'>
                <div className='invest__thumb wow animate__animated animate__fadeInLeft'>
                  <img
                    src='assets/images/invest/invest-illustration.png'
                    alt='Invest'
                  />
                </div>
              </div>
              <div className='col-lg-6 offset-lg-1'>
                <div className='invest__content'>
                 <Title
                 upperTitle={'Payments app for Everyday essentials'}
                 title={'Send, receive and invest money right from your phone'}
                 text={'Make day-to-day spending a breeze with all things money in one place'}
                 />
                  <div className='invest__feature__wrapper'>
                    {
                        investData.map((item, index) => (
                            <InvestCard item={item} key={index} />
                        ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Invest