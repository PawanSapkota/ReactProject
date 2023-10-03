import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import data from '../../constants/data'
import images from '../../constants/images'
import './Laurels.css'


const Laurels = () => {

  const AwardCard =({award:{imgUrl,title,subtitle}})=>(
    <div className='app__laurels_award-cards'>
      <img src={imgUrl} alt="awards" />
      <div className='app__laurels_award-cards_content'>
        <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
        <p className='p__cormorant' >{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <Subheading title="Awards & Recognition"/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels_awards'>
          {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="Laurels" />
      </div>

    </div>
  )
}

export default Laurels