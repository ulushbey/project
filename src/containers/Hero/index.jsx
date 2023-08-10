import React from 'react'

const Hero = () => {
  return (
     <section
        className='hero bg-img'
        data-background='assets/images/hero/hero-bg.png'
      >
        <div className='container'>
          <div className='hero__area'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-7'>
                <div className='hero__content'>
                  <h6 className='wow animate__animated animate__fadeInUp'>
                    Security - Privacy - User friendly
                  </h6>
                  <h1 className='wow animate__animated animate__fadeInUp'>
                    One App, All Things Money
                  </h1>
                  <p className='large wow animate__animated animate__fadeInUp'>
                    From easy money management,crypto investments and trade.
                    Open your mosto account.
                  </p>
                  <div className='hero__content__link wow animate__animated animate__fadeInUp'>
                    <a href='#hero'>
                      <img
                        src='assets/images/app-store.png'
                        alt='Apple Store'
                      />
                    </a>
                    <a href='#'>
                      <img
                        src='assets/images/play-store.png'
                        alt='Google Play Store'
                      />
                    </a>
                  </div>
                  <div className='hero__ratings'>
                    <div className='hero__ratings__store wow animate__animated animate__fadeInUp'>
                      <h2>4.5/5</h2>
                      <div className='hero__ratings__star'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                      </div>
                      <p>On the iOS App Store</p>
                    </div>
                    <div
                      className='hero__ratings__store wow animate__animated animate__fadeInUp'
                      data-wow-delay='0.s'
                    >
                      <h2>4.5/5</h2>
                      <div className='hero__ratings__star'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                      </div>
                      <p>On the iOS App Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hero__img wow animate__animated animate__fadeInTopRight'>
          <img
            src='assets/images/hero/circle.png'
            alt='circle'
            className='hero__circle'
          />
          <img
            src='assets/images/hero/wallet.png'
            alt='Wallet'
            className='hero__wallet'
          />
          <img
            src='assets/images/hero/mockup.png'
            alt='mockup'
            className='hero__mock'
          />
        </div>
      </section>
  )
}

export default Hero