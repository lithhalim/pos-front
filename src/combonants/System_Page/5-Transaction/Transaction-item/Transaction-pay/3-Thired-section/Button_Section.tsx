import React, { useContext } from 'react';
import "./style/style.scss";
import {AiFillCloseCircle,AiFillDollarCircle} from "react-icons/ai"
import { invios_Context } from '../../../../../../context-api/Invios-context';


function Button_Section({AllData,TotalPrice}:any) {
  const invios_Context_Show=useContext(invios_Context);

  const PayNow=()=>{
    invios_Context_Show.setshowPaymentPage(true)
  }
  return (
    <div className='thired-section'>
        <button className='cancel'><span><AiFillCloseCircle/></span> <span>Cancel</span></button>
        <button className='pay' onClick={PayNow}> <span><AiFillDollarCircle/></span> <span>Pay</span></button>
    </div>
  )
}

export default Button_Section
