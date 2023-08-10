import React, { useState } from 'react'
import Title from '../../components/Title'
import pricingData from '../../data/pricing.data'
import PricingCard from '../../components/cards/PricingCard'

const Pricing = () => {
  return (
    <div
        className='pricing bg-img'
        id='plan'
        data-background='assets/images/pricing/pricing-bg.png'
      >
        <div className='container'>
          <div className='pricing__area'>
            <div className='choice__title'>
            <Title 
            upperTitle={'Bizni maqsadimiz'}
            title={'Buyuklar ortidan ergashish'}
            text={'Kop gapirma ishni qil'}
            isCenter={true}
            />
            </div>
            <div className='row'>
                {
               pricingData.map((item, index) => (
              <div className='col-lg-6 col-xl-4' key={index}>
                    <PricingCard item ={item} isSelected={index === 1}/>
              </div>     
                    ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pricing