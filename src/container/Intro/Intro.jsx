import React, { useState,useRef } from 'react'
// import {BsFillPlayFill,BsPauseFill} from 'react-icons'
import meal from '../../constants/index'
import './Intro.css'


const Intro = () => {
  const[playVideo,setPlayVideo] =useState(false)
  const vidRef =useRef()
  return (
    <div className='app__video'>
      <video
      src={meal}
      ref={vidRef}      
      type="video/mp4" 
      muted
      Loop
      controls={false}
      />

    </div>
  )
}

export default Intro