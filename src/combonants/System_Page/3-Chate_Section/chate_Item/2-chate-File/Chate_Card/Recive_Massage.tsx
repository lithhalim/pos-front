import React, { useEffect, useRef } from 'react';
import Moment from 'react-moment';

function Recive_Massage({dataUse}:any) {
    const {Image,fullName,regusterid,role,text,time}=dataUse;

    const RefButton=useRef<any>();
    useEffect(()=>{
        RefButton.current.scrollIntoView({
            behavior: 'smooth',

        });
    })
    
  return (
    <div className='item-container-chate'>
        <div className='image-container'>
            <img src={Image} alt="" />
        </div>
        <div className='text-area'>
            <ul className='data'>
                <li><span>{fullName}</span> <span>({role})</span></li>
                <li><Moment fromNow>{time}</Moment></li>
            </ul>
            <p>{text}</p>
        </div>
        <div ref={RefButton}></div>
    </div>
)
}

export default Recive_Massage
