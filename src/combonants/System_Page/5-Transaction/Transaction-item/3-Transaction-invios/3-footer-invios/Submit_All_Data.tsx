import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {useSelector,useDispatch} from "react-redux"

import uuid from 'react-uuid';
import { Login_Create_Context } from '../../../../../../context-api/authntication-context';
import { invios_Context } from '../../../../../../context-api/Invios-context';
import { clearAllData } from '../../../../../../redux/addToCart';


function Submit_All_Data({CashVlue}:any) {

    const User_Context_Element=useContext(Login_Create_Context);
    const invios_Context_Element=useContext(invios_Context);
    const select=useSelector((state:any)=>(state.addToCartSlice));
    let [AllItemData,setAllItemData]=useState<any>([]);
    const dispatch=useDispatch()

    



    useEffect(()=>{
        let dataUse:any=[];
        select.allProduct.forEach((data:any)=>{
            dataUse.push([data.productName,data.id,data.selectItemQuentuty,Number(data.selectItemQuentuty)*Number(data.Price)])
        })
        setAllItemData(dataUse)
      },[])
    

      const SubmitAllData=()=>{    
        let dataSent={
            invoiceNumber:uuid(),
            UserName:User_Context_Element.AllUserDaata.fullName,
            NumberItem:select.value,
            AllDatauser:AllItemData,
            TotalPrice:invios_Context_Element.newPrice,
            Cash:CashVlue,
            RemaningValue:invios_Context_Element.newPrice-CashVlue,
            delivery:invios_Context_Element.DeleverDescount.delevery,
            descount:invios_Context_Element.DeleverDescount.descout}

        axios.post(`${process.env.REACT_APP_API}createinvios`,dataSent).then((data)=>{
            invios_Context_Element.setshowPaymentPage(false);
            invios_Context_Element.setAllDataPrint(data.data);
            dispatch(clearAllData({}))
        })  

      }


  return (
    <>
        <button className='subbmit-alldata' onClick={SubmitAllData}>
            Submit All Data 
        </button>
    </>
)
}

export default Submit_All_Data
