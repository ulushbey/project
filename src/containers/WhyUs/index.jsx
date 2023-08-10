import React from 'react'
import Title from '../../components/Title'
import WhyUsSlider from '../../components/sliders/ClientSlider/WhyUsSlider'

const WhyUs = () => {
  return (
    <section
        className='choice bg-img'
        id='whyMosto'
        data-background='assets/images/choice/choice-bg.png'
      >
        <div className='choice__area'>
          <div className='choice__title'>
            <Title
            upperTitle={'Why Mosto'}
            title='Learn Why Mosto is the right Choice for you'
            text='Join 16+ mil people who already trust us with their money'
            isCenter={true}
            />
          </div>
          <WhyUsSlider />
        </div>
      </section>
  )
}

export default WhyUs