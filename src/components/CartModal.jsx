import React from 'react'
import 사진 from './무화버터.jpg'
const CartModal = () => {
  return (
    // subpage에서 장바구니를 누르면 subpage button에서는 장바구니라는 db에서 내가 누른 아이템을 추가하는 기능 + 모달창 열기만 하면 된다.
    // 모달창은 subpage와 별개로 만들어서 내가 저장해놓은 데이터베이스들을 갖고오는 형식으로 한다.
    <div className='modal_wrapper'>
        <div className='modal_inner'>
        <div className='modal1'>
            <p>옵션선택</p>
            <p>X</p>
            
            </div>
        <span></span>
        <div className="modal2">
            <div className='modal2_img'><img src={사진} alt="" /></div>
            <div className='modal2_txt'>
                <p>상품이름</p>
                <p>수량 :</p>
                <p>10000원</p>
            </div>
        </div>
      

        <div className="modal3">
            <button>바로 구매하기</button>
            <button>장바구니에 넣기</button>
        </div>
        <div>
            
        </div>





    </div>
    </div>
  )
}

export default CartModal