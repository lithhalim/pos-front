import axios from 'axios';
import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';

// Formik Import Section
import { Formik, Form, Field } from 'formik';

//Import Data Use
import Submit_UploadPhoto from './2-UploadImage_Submit';
import { Product_Context } from '../../../context-api/product-context';







function Item_Details2({Data_Details,datause}) {


//get the initial value
const initialValues=Data_Details.initialValues;

//you schema style validation 
const SignupSchema = Data_Details.SignupSchema


  const [saveImage,setSaveImage]=useState(false);
  const [ImageError,setImageError]=useState(false);

  const Product_Context_Item=useContext(Product_Context);



      const getAllData = (DataFromForm) =>{
        if(saveImage){
          DataFromForm.Image=saveImage;
          DataFromForm[Data_Details.fetchInform.item]=uuid();
          DataFromForm.description="All Type Of The Food Ypu Will Get It In This Collection"
          axios.post(`${process.env.REACT_APP_API}${Data_Details.fetchInform.url}`,DataFromForm).then((data)=>{
            data.status==200?Product_Context_Item[datause.contextNameset](false):setImageError("Error In Create Somthing Error")
            //use to hide create Item
          })
          

        }else{
          setImageError("Image Must Be Added")
        }

      }    


    return (
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={getAllData}
            >
            {({ errors, touched }) => (

                    <Form className='container-inputs'>

                        {/* //Input Section Add */}
                        {Data_Details.input.map(({name,placeholder},i)=>(
                        <div key={i} className="containerItem">
                              <Field type="text" className='input-section'  placeholder={placeholder} name={name}/>
                              {errors[name] && touched[name] ? <div className='error-section'>{errors[name]}</div> : null}
                        </div>))}


                        {/* //select Section Add */}
                        <Field name={Data_Details.select.name} as="select">
                          {Data_Details.select.option.map(({value,name},i)=>(
                            <option value={value} key={i}>{name}</option>
                          ))}
                        </Field>
                        {errors[Data_Details.select.name] && touched[Data_Details.select.name] ? <div className='error-section'>{errors[Data_Details.select.name]}</div> : null}
                        

                        <Submit_UploadPhoto GetPhoto={(data)=>{setSaveImage(data.url)}}/>
                        {ImageError?<p className='ImageError' style={{textAlign:"center",marginTop:"5px"}}>{ImageError}</p>:<></>}
                      
                    </Form>)}
            </Formik>   
    
  )
}

export default Item_Details2




