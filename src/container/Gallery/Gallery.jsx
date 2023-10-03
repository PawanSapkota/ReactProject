import React,{useRef} from 'react'
import {GoChevronRight,GoChevronLeft} from 'react-icons/go'
import Subheading from '../../components/Subheading/Subheading'
import images from '../../constants/images'

import './Gallery.css'

const galleryImages =[images.gallery01,images.gallery02,images.gallery03,images.gallery04]


const Gallery = () => {

  const scrollRef =useRef(null);

  const scroll=(direction)=>{
    const {current} =scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }


  }
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <Subheading title='Instagram'/>
        <h1 className='headtext__cormorant'> Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA',marginTop:'2rem'}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque inventore possimus dolorum ad molestias quasi minus placeat, adipisci praesentium quas maiores necessitatibus sunt ipsam odio cumque unde consectetur architecto! Suscipit.</p>
        <button type='button' className='custom__button'> Learn More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image,index) =>(
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />

            </div>
          )       
            
          )}

        </div>

        <div className="app__gallery-images_arrow">
          <GoChevronLeft className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
          <GoChevronRight className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
        </div>

      </div> 
    </div>
  )
}

export default Gallery