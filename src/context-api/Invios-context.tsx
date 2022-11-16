import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';

//use to create the context 
export const invios_Context=React.createContext<any|null>(null);



export function Invios_Provider(props:any) {
//Get The Total Price For All Item Section
const selectData=useSelector((state:any)=>(state.addToCartSlice?.allProduct));
let totalPrice=selectData.reduce((acc:any,data:any)=>(acc+(Number(data.selectItemQuentuty)*Number(data.Price))),0);
const [TotalPrice,setNewTotalPrice]=useState<any>(totalPrice!==undefined?Number(totalPrice):0);


//Show Th Invsios Page Section
const[showPaymentPage,setshowPaymentPage]=useState(false);

//Set The Price Afetr Update The Value
const [newPrice,setNewPrice]=useState(totalPrice!==undefined?Number(totalPrice):0)

useEffect(()=>{
  setNewPrice(Number(totalPrice))
},[selectData])

//The Delevery And The Descount value Section 
const [DeleverDescount,setDeleverDescount]=useState({descout: 0, delevery: 0, currency: 'USA'})


//All Data To Print Section
const [AllDataPrint,setAllDataPrint]=useState(false)

  return (
    <invios_Context.Provider value={{TotalPrice,setNewTotalPrice,showPaymentPage,setshowPaymentPage,newPrice,setNewPrice,DeleverDescount,setDeleverDescount,AllDataPrint,setAllDataPrint}}>
        {props.children}
    </invios_Context.Provider>
  ) 
}
