import React, { useState } from 'react'
import 제품1 from './딸바2.jpg'
import data from '../data'
import { useNavigate } from 'react-router-dom'
import CartModal from './CartModal'
const Sub = () => {
    const [product, setProduct] = useState(data)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const modalOpen = ()=>{setOpen(!open)}
 
  return (
    <>
    <div className={`sub_wrapper ${open ? 'blur' : ''}`}>

        {product.map((a,i)=>(
            <div className="sub_item">
            <div className="sub_img" >
                {/* 이미지 클릭하면 오른쪽으로 모달창 뜨게 하기 */}
                <div class="sub_hover">
                    <p>{product[i].title}</p>
                    <p>{product[i].price}원</p>
                </div>
                <img src={제품1}/>
            </div>
            <div className="sub_btn">
                <button onClick={()=>{modalOpen()}}>장바구니</button>
                <button onClick={()=>{navigate('/purchase')}}>구매하기</button>
            </div>
 
            
            
            
            
        </div>




        ))}
                   
    </div>
   <div className='modal'>{open ? <CartModal/> : ''}</div> 
    </>



  )
}

export default Sub