import React, { useContext } from 'react';
import { invios_Context } from '../../context-api/Invios-context';
import "./style/style.scss";

let header=["item","barcode","quantity","price"]

function Data_Print() {
 const invios_Context_Element=useContext(invios_Context);
 let dataUse=invios_Context_Element.AllDataPrint



  return (
    <>
    {invios_Context_Element.AllDataPrint?
    <div className='data-print'>
        <div className='header-section'>
            <h3>Sale Invios</h3>
            <ul className='header-item-information'>
                <li>invoice number :{dataUse.invoiceNumber}</li>
                <li>history : 09 18 51</li>
                <li>User Name : {dataUse.UserName}</li>
            </ul>
        </div>
        <table>
            <tr>
                {header.map((data,i)=>(<th key={i}>{data}</th>))}
            </tr>
            {dataUse.AllDatauser.map((dataHave:any,i:any)=>(
                <tr key={i}>
                    {dataHave.map((item:any,i:any)=>(<td key={i}>{item}</td>))}
                </tr>
            ))}
        </table>

        <ul className='conclosion'>
            <li><span>Number Item</span> <span>{dataUse.NumberItem}</span></li>
            <li><span>Total Price</span> <span>{dataUse.TotalPrice}</span></li>
        </ul>

        <ul className='remaning-cash'>
            <li><span>Dsicount</span> <span>{dataUse.delivery}</span></li>
            <li><span>Delevery</span> <span>{dataUse.descount}</span></li>
            <li><span>Cash</span> <span>{dataUse.Cash}</span></li>
        </ul>
        <p className='remanin'>remaning {dataUse.RemaningValue}</p>

        <button className='print-section' onClick={()=>{invios_Context_Element.setAllDataPrint(false)}}>
            Print Invios
        </button>
        
      
    </div>
    :<></>}
    </>
  )
}

export default Data_Print
