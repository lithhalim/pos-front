import React, { useContext, useState } from 'react';

import {MdOutlineMailOutline} from "react-icons/md";
import {AiOutlineSetting} from "react-icons/ai";
import "./style/style.scss";

import {FaBars} from "react-icons/fa";
import { Login_Create_Context } from '../../../context-api/authntication-context';
import Logout_Bar from './Logout_Bar';



function Header_system() {
  // If The User Not Reguster You Cant Go 
  const Login_Create_Context_Item=useContext(Login_Create_Context);
  if(Login_Create_Context_Item.AllUserDaata==false){window.location.href="/"};


  const [showHideLogout,setshowHideLogout]=useState(false)
  const showSidebar=()=>{
    document.querySelector(".sidebar-section")?.classList.toggle("active")
  }

  return (
    <div className='header-system'>
      <div className='navbar'>
        <p onClick={showSidebar}>
          <FaBars/>
        </p>
      </div>
      <p className='name-logo'>Foodinzoo</p>
      <ul className='icon-section'>
        {showHideLogout?<Logout_Bar/>:<></>}
        <li onClick={()=>{showHideLogout==true?setshowHideLogout(false):setshowHideLogout(true)}}><img src={Login_Create_Context_Item.AllUserDaata?.Image} alt="" /></li>
        <li><span>{Login_Create_Context_Item.AllUserDaata?.role}</span></li>
      </ul>
    </div>
  )
}

export default Header_system
