import React from 'react'
import images from '../../constants/images'

const Subheading = ({ title }) => {
  return (
    <div style={{ margin: '0rem' }}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt='spoon' className='spoon__img' />

    </div>
  )
}

export default Subheading