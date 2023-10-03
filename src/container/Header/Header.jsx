import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import './Header.css'
import images from '../../constants/images'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper-info">
        <Subheading title ='Chase The New Flavour'/>
        <h1 className='app__header-h1'>The Key TO Find Dining</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Love, like a chicken salad or restaurant hash, must be taken with blind faith or it loses its flavour.</p>
        <button className='custom__button' type='button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt='Welcome'/>

      </div>

    </div>
  )
}

export default Header