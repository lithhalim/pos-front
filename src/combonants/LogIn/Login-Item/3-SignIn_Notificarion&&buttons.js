import React from 'react';
import {motion} from "framer-motion"


import FingerPrint from "../../../assest/fingerPrint.png";


function SignIn_Notificarion({statusEmail}) {

  return (
    <div>
        <h6>Keep Me Logged In </h6>      
        <motion.button   className='submit-botton' type="submit">Log In</motion.button>          
        <p className='special-text' >{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
        <div className='finger-print'>
            <img src={FingerPrint} alt="" />
            <p>Login With Touched</p>
        </div>
    </div>
  )
}

export default SignIn_Notificarion