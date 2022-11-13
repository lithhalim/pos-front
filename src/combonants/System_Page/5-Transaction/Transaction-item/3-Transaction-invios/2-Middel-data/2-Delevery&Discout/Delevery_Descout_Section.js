import React, { useContext, useEffect, useState } from 'react';
import DataDelevery from './dataDelevery';
import "./style/style.scss";

//Formik Input Section Added
import { Formik, Form, Field } from 'formik';
import Select_Currency from '../All_Item/1-Select_Currency';
import axios from 'axios';

import image from "../../../../../../../assest/payment/invios.png";
import { invios_Context } from '../../../../../../../context-api/Invios-context';




function Delevery_Descout_Section() {
  const [DataCurrency,setDataCurrency]=useState({});
  const invios_Context_Price=useContext(invios_Context);

  useEffect(()=>{
      axios.get(`https://api.currencyfreaks.com/latest?apikey=${process.env.REACT_APP_CURRENCY}&symbols=JOD,GBP,EUR,KWD,QAR`).then((data)=>{
          let datause=data?.data.rates;
          datause.USA="1"
          setDataCurrency(datause)
      })
  },[])



  const Get_AllDataHave=(data)=>{
    invios_Context_Price.setDeleverDescount(data)
    let discount=Number(data.descou) ; let delevery=Number(data.delevery); let currency=data.currency.split("###")[0];
    let Totalprice=invios_Context_Price.TotalPrice; 

    let newPrice=(Totalprice+delevery);
    if(discount>0){
      newPrice=(Totalprice+delevery)-((Totalprice+delevery)*(discount/100))
    }
    newPrice=Math.floor(DataCurrency[currency]*newPrice)


    invios_Context_Price.setNewPrice(newPrice)
  }

  return (
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={Get_AllDataHave}>
                {({ errors, touched }) => (
                    <Form className='container-all-middel-data'>
                          <Select_Currency/>
                          <div className='sideImage'>
                            <img src={image} alt="" />
                          </div>

                          {DataDelevery.input.map(({name,value,icon},i)=>(
                              <div key={i} className="container-input">
                                  <div className='container-item'>
                                    <span>{icon}</span>
                                    <Field type="number" name={value} />
                                  </div>
                                  <p className='error-section'>
                                      {errors[value] && touched[value] ? <div className='error-section'>{errors[value]}</div> : null}
                                  </p>
                              </div>
                          ))}

                            <button type='submit' className='submit-change'>Submit Data</button>
                    </Form>)}
            </Formik>   
   
  )

}



export default Delevery_Descout_Section






const initialValues=DataDelevery.initialValues;
const SignupSchema = DataDelevery.SignupSchema
