import React from 'react'
import Signin_Section_Have from './Login-Item/2-Signin-Section';
import Signin_Header from './Login-Item/1-Signin_Header';

function Login_Section() {
  return (
    <div  className='login-container'>
      <div className='holder-login'>
          <Signin_Header/>
          <Signin_Section_Have/>
      </div>
    </div>
  )
}

export default Login_Section