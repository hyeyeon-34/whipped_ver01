import React, { useState } from 'react'
import 스킨타입 from './skin_all.jpg'
import 스킨1 from './머그트리.jpg'
import 스킨2 from './라보카도2.jpg'
import 스킨3 from './호호벤더.jpg'
import 스킨4 from './무화버터.jpg'
import 스킨5 from './딸바2.jpg'
import data from '../data'
import 미들 from './미들.jpg'

const Skin = () => {
const [view, setView] = useState('one')
const [skin, setSkin] = useState('1')
const [product, setProduct] = useState(data)
const [type1, setType1] = useState(false)
const [type2, setType2] = useState(false)
const [type3, setType3] = useState(false)
const btnClick1=()=>{setType1(true); setType2(false); setType3(false)}
const btnClick2=()=>{setType1(false); setType2(true); setType3(false)}
const btnClick3=()=>{setType1(false); setType2(false); setType3(true)}

  return (
    <div className="slider">
      
      {view === 'one'?
        <div className="skin_img_one" >
            <img src={스킨타입} alt="" style={{width:"100%", height:"100%"}}/>
        </div> : 
        ''
    }
    {view === 'two' && skin ==='1'?  
         <div className="skin_img_two" style={{padding:"20px", gap:"20px"}}>
            <img src={스킨5} alt="" />
            <div>
              <div>{product[5].title}</div>
              <div>{product[5].price}</div>
            </div>
            <img src={스킨2} alt=""/>
            <div>
              <div>{product[2].title}</div>
              <div>{product[2].price}</div>
            </div>
        </div>:<div></div>}
        {view === 'two' && skin ==='2'?  
         <div className="skin_img_two" style={{padding:"20px", gap:"20px"}}>
            <img src={스킨2} alt="" />
            <div>
              <div>{product[2].title}</div>
              <div>{product[2].price}</div>
            </div>
            <img src={스킨5} alt="" />
            <div>
              <div>{product[5].title}</div>
              <div>{product[5].price}</div>
            </div>
        </div>:<div></div>}
        {view === 'two' && skin ==='3'?  
         <div className="skin_img_two" style={{padding:"20px", gap:"20px"}}>
            <img src={스킨2} alt="" />
            <div>
            <div>{product[2].title}</div>
            <div>{product[2].price}</div>
            </div>
            <img src={스킨5} alt=""/>
            <div>
            <div>{product[5].title}</div>
            <div>{product[5].price}</div>
            </div>
        </div>:<div></div>}
        <div className="skin_btn">
          {type1 ? ( <button onClick={()=>{setView('two'); setSkin('1'); btnClick1()}} style={{backgroundColor:"rgb(227, 227, 185)", border:"solid rgb(79,94,109)"}}>수부지</button>):( <button onClick={()=>{setView('two'); setSkin('1'); btnClick1()}}>수부지</button>)}
          {type2 ? ( <button onClick={()=>{setView('two'); setSkin('2'); btnClick2()}} style={{backgroundColor:"rgb(227, 227, 185)", border:"solid rgb(79,94,109)"}}>민감건성</button>):( <button onClick={()=>{setView('two'); setSkin('2'); btnClick2()}}>민감건성</button>)}
          {type3 ? ( <button onClick={()=>{setView('two'); setSkin('3'); btnClick3()}} style={{backgroundColor:"rgb(227, 227, 185)", border:"solid rgb(79,94,109)"}}>민감지성</button>):( <button onClick={()=>{setView('two'); setSkin('3'); btnClick3()}}>민감지성</button>)}

             {/* <button onClick={()=>{setView('two'); setSkin('2'); btnClick2()}}>민감건성</button>
            <button onClick={()=>{setView('two'); setSkin('3'); btnClick3()}}>민감지성</button> */}

        </div>
    </div>
  )
}

export default Skin



