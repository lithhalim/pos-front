import React, { useContext } from 'react'
import Tranaction_view from './Transaction-item/Tranaction_view';
import "./style/style.scss"
import Transaction_pay from './Transaction-item/Transaction-pay/Transaction_pay';
import Invios_Pay from './Transaction-item/3-Transaction-invios/Invios_Pay';
import { invios_Context } from '../../../context-api/Invios-context';

function Transaction_main() {
  
  const invios_Context_Show=useContext(invios_Context);
  return (
    <div className='container-transaction'>
        <Tranaction_view/>
        <Transaction_pay/>
        {invios_Context_Show.showPaymentPage==true?<Invios_Pay/>:<></>}
    </div>
  )
}

export default Transaction_main