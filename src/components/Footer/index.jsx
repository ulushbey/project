import React from 'react'

const Footer = () => {
  return (
     <footer
        className='bg-img'
        data-background='assets/images/footer-bg.png'
      >
        <div className='container'>
          <div className='footer__area'>
            <div className='footer__cta wow animate__animated animate__fadeInUp'>
              <a href='index.html'>
                <img
                  src='assets/images/logo.png'
                  alt='Logo'
                  className='logo'
                />
              </a>
              <form
                action='#'
                method='post'
                className='wow animate__animated animate__fadeInUp'
              >
                <div className='input__group'>
                  <input
                    type='email'
                    name='subscribe'
                    id='subscribe'
                    required='required'
                    placeholder='Your Email Address'
                  />
                  <button type='submit'>
                    <i className='fab fa-telegram-plane' />
                  </button>
                </div>
              </form>
              <div className='footer__social'>
                <a href='#'>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href='#'>
                  <i className='fab fa-twitter' />
                </a>
                <a href='#'>
                  <i className='fab fa-pinterest-p' />
                </a>
                <a href='#'>
                  <i className='fab fa-google-plus-g' />
                </a>
                <a href='#'>
                  <i className='fab fa-instagram' />
                </a>
              </div>
            </div>
            <div className='footer__links wow animate__animated animate__fadeInUp'>
              <a href='#'>About</a>
              <a href='#'>FAQs</a>
              <a href='#'>Contact</a>
              <a href='#'>Terms of Service</a>
              <a href='#'>Privacy</a>
            </div>
            <div className='footer__credit wow animate__animated animate__fadeInUp'>
              <p className='text-center'>
                Copyright © 2022.All Rights Reserved By{' '}
                <a href='https://themeforest.net/user/pixelaxis/portfolio'>
                  Mosto
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer