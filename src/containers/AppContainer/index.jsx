import React from 'react'

const App = () => {
  return (
   <section
        className='app'
        id='appStore'
      >
        <div className='container'>
          <div className='app__area'>
            <div className='app__area__content'>
              <h2 className='wow animate__animated animate__fadeInUp'>
                Take control of your personal finances today
              </h2>
              <div className='hero__content__link wow animate__animated animate__fadeInUp'>
                <a href='#'>
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
            </div>
            <img
              src='assets/images/android.png'
              className='android d-none d-xl-block wow animate__animated animate__fadeInUp'
              alt='Download App'
            />
          </div>
        </div>
      </section>
  )
}

export default App