import React, {useEffect, useState } from 'react'
import './BottomUp.css'
import { FaAngleUp } from 'react-icons/fa'

const BottomUp = () => {
  const [isVisible, setIsVisible] = useState(false)
    const HandleBtn =() =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
   const listenToScroll =() =>{
    let hideBtn=700;
    const winscroll= document.body.scrollTop || document.documentElement.scrollTop;
    if(winscroll>hideBtn){
      setIsVisible(true);
    }else{
      setIsVisible(false);
    }

  }
    useEffect(() => {
            window.addEventListener("scroll", listenToScroll);
    },[])
  return (
   
    <div className='BottomUp'>
{isVisible && (
        <button onClick={HandleBtn}><FaAngleUp className='ArrowUp'/></button>
    )}
    </div>
  
  );
}


export default BottomUp