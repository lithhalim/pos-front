import axios from 'axios'
import React, {  useEffect, useState } from 'react';
import currency_Data from "./select-correncyData";
import { Formik, Form, Field } from 'formik';


//First Flag
import UsaFlag from "../../../../../../../assest/flags/usa.png"
import "./style/style.scss"
 
function Select_Currency() {
    const [ImageCurrency,setImageCurrency]=useState<any>(UsaFlag);

    
useEffect(()=>{
  document.querySelector(".currency-check")?.addEventListener("change",selectCurrency)
},[])

    const selectCurrency=(event:any)=>{
       let datause= event.currentTarget.value.split("###")
       const[value,image]=datause;

       //Set The Image Section 
       setImageCurrency(image);
    }




  return (
    <div className='container-currency-section-have'>
            {ImageCurrency!==undefined?<img src={ImageCurrency} alt="" />:<></>}
                <Field name="currency"  className="currency-check"  as="select">
                    {currency_Data.map(({name,image,value}:any,i)=>(
                             <option value={`${value}###${image}`} key={i} >{name}</option>
                        ))}
                </Field>
    </div>
  )
}

export default Select_Currency
