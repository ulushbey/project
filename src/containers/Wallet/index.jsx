import React from 'react'
import Title from '../../components/Title'
import walletData from '../../data/wallet.data'
import CheckItem from '../../components/CheckItem'

const Wallet = () => {
  return (
       <section
        className='wallet bg-img'
        data-background='assets/images/wallet/wallet-bg.png'
      >
        <div className='container'>
          <div className='wallet__area'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='wallet__content'>
                <Title 
                    upperTitle={'Buy growing crypto right from your phone'}
                    title='A crypto wallet from the future'
                    text={'Dictum fusce ut placerat orci nulla pellentesque nulla facilisi nullam vehicula ipsum eu volume'
                }
                />
                  <ul className='wow animate__animated animate__fadeInUp'>
                    {walletData.map((item, index) => (
                        <CheckItem title={item} key={index} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className='col-lg-6 d-none d-lg-block'>
                <div className='wallet__thumb'>
                  <img
                    src='assets/images/wallet/wallet.png'
                    alt='Future Wallet'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Wallet