import React from 'react'
import Title from '../../components/Title'
import paymentData from '../../data/payments.data'
import CheckItem from '../../components/CheckItem'
import paymentsData from '../../data/payments.data'

const Payments = () => {
  return (
    <section
        className='payment'
        id='virtual'
      >
        <div className='container'>
          <div className='payment__area'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-6 d-none d-lg-block'>
                <div className='payment__thumb wow animate__animated animate__fadeInLeft'>
                  <img
                    src='assets/images/design/card-bg.png'
                    alt='Payments'
                  />
                  <img
                    src='assets/images/design/card-one.png'
                    alt='Crad'
                    className='card-one'
                  />
                  <img
                    src='assets/images/design/card-two.png'
                    alt='Card'
                    className='card-two'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='payment__content'>
                  <Title 
                  upperTitle={'Get Your Card'}
                  title={' One card for all your onlne payments'}
                  text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tristique tincidunt arcu.`}
                  />
                  <ul className='wow animate__animated animate__fadeInUp'>
                    {paymentsData.map((item, index)=>(
                      <CheckItem title={item} key={index} isLarge={true} />
                    ))}
                  </ul>
                  <div
                    className='hero__content__link wow animate__animated animate__fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <a
                      href='#'
                      className='button'
                    >
                      Get Virtual Card
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Payments