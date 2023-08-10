import React from 'react'
import Title from '../../components/Title'
import workData from '../../data/work.data'
import WorkCard from '../../components/cards/WorkCard'

const Work = () => {
  return (
   <section
        className='work bg-img'
        data-background='assets/images/choice/choice-bg.png'
      >
        <div className='container'>
          <div className='work__area'>
            <div className='choice__title'>
            <Title 
            upperTitle='How Does It Works'
            title='Follow Some Simple Steps For Using Mosto'
            isCenter={true}
            />
            </div>
            <div className='row'>
              {
                workData.map((item, index) => (
                    <div className='col-md-6 col-lg-4' key={index}>
                        <WorkCard item={item} className={
                        index == 0 
                        ? 'work__item--primary' 
                        : index == 1 
                        ? 'work__item--secondary'
                        : 'work__item'
                        }
                        />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Work;