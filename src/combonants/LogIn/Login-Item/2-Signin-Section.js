import React, { useContext, useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Login_Create_Context } from '../../../context-api/authntication-context';
import {motion} from "framer-motion"




//Formik Input Section Added
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import "../style/style.scss";


//Combonants Import Section 
import SignIn_Notificarion from './3-SignIn_Notificarion&&buttons';

import Data_Signin_Use from './Data_Signin';
import { useNavigate } from 'react-router-dom';

   
const initialValues={
  email: '',
  password:'',
}



function Signin_Section_Have() {

  const [statusEmail,setStatusEmail]=useState(false);
  const loginContext=useContext(Login_Create_Context);
  const Navi=useNavigate()


  // sign In Section Send All Data
  const Get_AllDataHave=(data)=>{
    
        //Get email And Pass And Decoded `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
        const {email,password} =data;
        const decoded=btoa(`${email}:${password}`)


        //Send In Header Becuse More Secure And In Get And Post Have Header put Get Dont Have Body
        axios.post(`${process.env.REACT_APP_API}signin`,{
            headers:{ 
            'Content-Type': 'application/json' ,
            'Accept': 'application/json',
            "authorization":`BASIC ${decoded}` }
          }).then((x)=>{
                //send the accsess Token To User To Useit
                if(x.data.accessToken==="Error Email Or Password"){
                  setStatusEmail("Wrong Email Or Password")
                }else{
                  const decoded = jwt_decode(x.data.accessToken);
                  window.localStorage.SaveAuthnticaiton=JSON.stringify(decoded);
                  loginContext.setAllUserData(decoded)
                    
                  loginContext.setsignin(false);
                  setStatusEmail(false);
                  Navi("/dashboard")
                }
            }).catch((errors)=>{
                //if The Email Or The Password ARE WRONG
                setStatusEmail("Wrong Email Or Password")
            });
    
  } 



  return (
    <>
          <motion.div className='signin-container' initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}>
              <div className='signin-container-section'>
                <h3>Login</h3>
                          <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllDataHave}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>

                                          {Data_Signin_Use.map(({name,icon,type,placeholder},i)=>(
                                            <>
                                                <ul className='container-input' key={i}>
                                                    <li>{icon}</li>
                                                    <li>
                                                      <Field type={type} name={name}  placeholder={placeholder}/>
                                                    </li>
                                                </ul> 
                                                <p>
                                                  {errors[name] && touched[name] ? <div className='error-section'>{errors[name]}</div> : null}
                                                </p>

                                            </>                                       
                                          ))}

                                          <SignIn_Notificarion statusEmail={statusEmail}/>
                    
                                        </Form>
                                    )}
                      </Formik>      
              </div>
        </motion.div>
    </>
  )
}

export default Signin_Section_Have





//you schema style validation 
const SignupSchema = Yup.object().shape({
  email:Yup
    .string()      
    .required("Mail is required"),
  password: Yup.string()
     .label('Password')
     .required(),
   });

