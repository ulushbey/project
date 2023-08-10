import React from 'react'
import Title from '../../components/Title'
import DesignCard from '../../components/cards/DesignCard'
import designData from '../../data/design.data'

const Design = () => {
  return (
    <section className='design'>
        <div className='container'>
          <div className='design__area'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-5 d-none d-lg-block'>
                <div className='design__thumb wow animate__animated animate__fadeInLeft'>
                  <img
                    src='assets/images/design/design-illustration.png'
                    alt='Design'
                  />
                </div>
              </div>
              <div className='col-lg-6 offset-lg-1'>
                <div className='design__content'>
                  <Title 
                  upperTitle={"Security that's strong as oak"}
                  title={'Bulletproof security by design'}
                  text='We use bank-level security, 256-bit encryption, and allow two-factor 
                  authentification for added security'
                  />
                  <div className='design__content__security'>
                    <div className='design__content__cards'>
                       {designData.slice(0, 2).map((item, index) => (
                        <DesignCard item={item} key={index} />
                      ))}
                    </div>
                    <div className='design__content__cards'>
                      {designData.slice(2).map((item, index) => (
                        <DesignCard item={item} key={index} className={index===0 ? 'third--item' : index===1 ? 'fourth--item' : ''} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Design