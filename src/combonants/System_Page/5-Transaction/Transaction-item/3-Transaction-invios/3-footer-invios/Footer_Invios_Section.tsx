import React, { useContext, useState } from 'react';
import { invios_Context } from '../../../../../../context-api/Invios-context';
import "./style/style.scss";
import Submit_All_Data from './Submit_All_Data';


function Footer_Invios_Section() {
  const invios_Context_Element=useContext(invios_Context);
  const [CashVlue,setCashVlue]=useState<any>(0);





  const getchange=(event:any)=>{
    setCashVlue(event.currentTarget.value);
  }


  return (
    <>
        <div className='remaning-cash'>
          <p>Cash Insert Here ..</p>
          <input type="number"   placeholder='Input Cash' onChange={getchange}/>
        </div>

      <div className='footer-invios-section'> 
          <ul className='first-section'>
              <li><span>Total Payable: </span><span>{invios_Context_Element.newPrice}$</span> </li>
              <li><span>Cash: </span><span>{CashVlue}$</span> </li>
              <li><span>Remaning Value: {invios_Context_Element.newPrice-CashVlue} $</span>  </li>
          </ul>

          <Submit_All_Data CashVlue={CashVlue}/>
      </div>

    </>
  )
}

export default Footer_Invios_Section
