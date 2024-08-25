import React from 'react'
import Navbar from '../Navbar'
import '../../App.css'
import Media from '../Media'
import Skin from '../Skin'
import Footer from '../Footer'
import Middle from '../Middle'

const index = () => {
  return (
    <div className="mainpage">
        <Navbar className="navbar"/>
 
        <Media className="media_"/>
        <Middle/>
        <Skin className="skin"/>
        <Footer className="footer"/>
        
    </div>
  )
}

export default index