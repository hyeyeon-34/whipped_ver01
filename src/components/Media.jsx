import React, { useEffect, useState } from 'react'
import '../App.css'
import 사진 from './whipped.jpeg'

import ReactPlayer from 'react-player';

const Media = () => {

  return (
    <div className="media_wrapper">
      <div className="photo">
        <img src={사진} alt="" style={{width:"100%", height:"100%", opacity:"01"}}/>
      </div>
      <div className="video">

        <div style={{height: "50%", width:"100%"}}>
      <ReactPlayer
        url="/mainvideo01.mp4"  
        controls={false}
        playing={true}
        width="100%"
        height="100%"
        className="reactplayer"
        loop={true}
        muted={true}
        style={{ objectFit: 'fill' }}

      />
      </div>
      <div style={{height: "50%", width:"100%"}}>
      <ReactPlayer
        url="/mainvideo02.mp4"  
        controls={false}
        playing={true}
        width="100%"
        height="100%"
        className="reactplayer"
        loop={true}
        muted={true}
        style={{ objectFit: 'cover' }}

      />
      </div>
   
     

      



    </div>


    </div>
  )
}

export default Media





