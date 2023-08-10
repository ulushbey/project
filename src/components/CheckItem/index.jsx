import React from 'react'

const CheckItem = ({title, isLarge}) => {
  return (
    <li className={`${isLarge ? 'large' : ''}`}>
        <i className='fas fa-check' /> {title}
    </li>
  )
}

export default CheckItem