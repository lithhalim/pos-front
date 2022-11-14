import React, { useContext } from 'react';
import { Login_Create_Context } from '../../../../../context-api/authntication-context';
import Chate_Header from './1-Chate_Header';
import Chate_View from './2-chate_View';
import Chate_Input from './3-chate_Input.js';
import "./style/style.scss";

function Chate_Zone() {
    const Login_Create_Context_User=useContext(Login_Create_Context).AllUserDaata;

  return (
    <div className='container-all-file'>
        <Chate_Header datause={Login_Create_Context_User}/>
        <Chate_View datause={Login_Create_Context_User}/>
        <Chate_Input datause={Login_Create_Context_User}/>
    </div>
  )
}

export default Chate_Zone