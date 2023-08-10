import React from 'react'
import Title from '../../components/Title'
import ScreenshotSlider from '../../components/sliders/ScreenshotSlider'

const Screenshot = () => {
  return (
      <section className='shot'>
        <div className='container'>
          <div className='shot__area'>
            <div className='choice__title'>
              <Title
              upperTitle={'A beautiful way to present'}
              title={'App screenshots'}
              text={`The simple, intuitive and powerful app to manage your work. The only app 
              you'll need to power your life. Learn how:`}
              /> 
            </div>
          </div>
        </div>
        <ScreenshotSlider />
      </section>
  )
}

export default Screenshot