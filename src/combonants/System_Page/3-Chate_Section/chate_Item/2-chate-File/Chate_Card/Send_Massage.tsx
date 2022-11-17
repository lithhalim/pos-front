import React, { useEffect, useRef } from 'react';
import Moment from 'react-moment';
import { ResiveMassage } from '../../../../../Interfaces/Interfaces_All';

function Send_Massage({dataUse}:ResiveMassage) {

    const {Image,fullName,role,text,time}=dataUse;
    const RefButton=useRef<any>();
    useEffect(()=>{
        RefButton.current.scrollIntoView({
            behavior: 'smooth',

        });
    })
  return (
    <div className='item-container-chate' style={{display:"flex",justifyContent:"end"}}>
        <div className='text-area'>
            <ul className='data' >
                <li > <span>({role})</span> <span>{fullName}</span></li>
                <li><Moment fromNow>{time}</Moment></li>
            </ul>
            <p style={{direction:"rtl",backgroundColor:" rgba(0, 0, 255, 0.288)"}}>{text}</p>
        </div>
        <div className='image-container'>
            <img src={Image} alt="" />
        </div>
        <div ref={RefButton}></div>
    </div>
  )
}

export default Send_Massage
