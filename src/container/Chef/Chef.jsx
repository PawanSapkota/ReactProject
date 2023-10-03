import React from 'react'
import images from '../../constants/images'
import Subheading from '../../components/Subheading/Subheading'

import './Chef.css'

const Chef = () => {
  return (
    <div className='app__wrapper app__bg section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt='chef'/>         
      </div>

      <div className='app__wrapper_info'>
        <Subheading title="Chef Word's"/>
        <h1 className='headtext__cormorant'> What We Believe In</h1>

        <div className="app__wrapper-content">
          <div className="app__wrapper-content_quote">
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit dignissimos tenetur velit enim, sed quidem sunt distinctio quo, earum debitis, modi saepe aspernatur nesciunt explicabo quod! Corrupti, qui nisi?0</p>
          </div>
        </div>

        <div className='app-chef-sign'>
          <p>Pawan</p>
          <p className='p__opensans'>Manager & CEO</p>
          <img src={images.sign} alt="sign" />

        </div>
      </div>

    </div>
  )
}

export default Chef