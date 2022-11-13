import React, { useContext } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import "./style/style.scss";
import DataHeader_Invios from "./Data_Header"
import { invios_Context } from '../../../../../../context-api/Invios-context';


function Header_Invios_Pay(){
  const invios_Context_Show=useContext(invios_Context);

  const selectPayment=(event:any)=>{
    let Item=event.currentTarget
    //Remove Active All Item
    Item.parentElement.childNodes.forEach((data:any)=>{
        data.classList.remove("active");
    })
    //Add Class To Specific Item
    Item.classList.add("active");

  }


  const closeInvios=()=>{invios_Context_Show.setshowPaymentPage(false)}
  return (
    <div className='header-invios-payment'>
        <div className='first-section'>
            <h3>Complete Sale</h3>
            <span onClick={closeInvios}><AiOutlineCloseCircle/></span>
        </div>
        <ul className='type-payment'>
          {DataHeader_Invios.map(({name,Icon,classSeection,Value}:any,i)=>(
            <li className={classSeection}
                  onClick={selectPayment} key={i} 
                  datatype={Value}>
                    <span>{Icon}</span> <span>{name}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Header_Invios_Pay
