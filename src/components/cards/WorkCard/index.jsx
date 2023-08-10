import React from 'react'

const WorkCard = ({item, className}) => {
  console.log('className: ', className)
  return (
     <div className={`work__item text-center work__item--primary wow animate__animated animate__fadeInUp`}>
                  <img
                    src={item.image}
                    alt='Install'
                  />
                  <h6 className='text-center'>{item.title}</h6>
                  <p className='text-center'>
                    {item.text}
                  </p>
     </div>
  )
}

export default WorkCard