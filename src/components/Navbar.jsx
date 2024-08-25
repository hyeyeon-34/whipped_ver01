import React, { useState } from 'react'
import '../App.css'
import 로고 from './BI_logo_WHIPPED.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false)
  // const user = useSelector((state) => state.auth.authData);
  return (
    
    <div className="navi">

        <div className="left">
            <p onClick={()=>{navigate('/')}}>Home</p>
            <p onClick={()=>{navigate('/subpage')}}>Shop</p>
            <p>Community</p>
        </div>
        <div className="logo">
     
           <img src={로고} alt="logo" style={{height:"100%", width:"100%"}}/>
          </div>
        <div className="right">
        <div className="login">
          {login ? <span>님</span> : <><span onClick={()=>{navigate('/login')}}>Login/</span><span onClick={()=>{navigate('/join')}}>Join</span></>}
      
          </div>
        <div className="main_cart" onClick={()=>{
          console.log("buton click");
          navigate('/cart')} 
      }>Cart</div>
       
        </div>

    </div>

  )
}

export default Navbar