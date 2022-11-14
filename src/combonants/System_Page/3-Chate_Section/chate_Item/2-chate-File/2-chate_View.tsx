import React, { useContext, useEffect, useState } from 'react'
import { Massage_Context } from '../../../../../context-api/massage-context'


function Chate_View({datause}:any) {
    const Massage_Context_Item=useContext(Massage_Context);
    const [datamassage,setdatamassage]=useState<any>([]);

    useEffect(()=>{
        if(Massage_Context_Item.massagess!==false){
            setdatamassage((oldData:any)=>[...oldData,Massage_Context_Item.massagess])
        }
    },[Massage_Context_Item.massagess]);

    


  return (
    <div className='chate-view'>
        {datamassage.length>0? datamassage.map(({Image,fullName,regusterid,role,text,time}:any,i:any)=>(
            <div className='item-container-chate'>
                <div className='image-container'>
                    <img src={Image} alt="" />
                </div>
                <div className='text-area'>
                    <ul className='data'>
                        <li>{fullName}</li>
                        <li>{role}</li>
                        <li>{time}</li>
                    </ul>
                    <p>{text}</p>
                </div>
            </div>
        )):<></>}
    </div>
  )
}

export default Chate_View
