import React, { useContext } from 'react';

import {MdOutlineMailOutline} from "react-icons/md";
import {AiOutlineSetting} from "react-icons/ai";
import "./style/style.scss";

import {FaBars} from "react-icons/fa";
import { Login_Create_Context } from '../../../context-api/authntication-context';



function Header_system() {

  const Login_Create_Context_Item=useContext(Login_Create_Context)
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
        <li><img src={Login_Create_Context_Item.AllUserDaata?.Image} alt="" /></li>
        <li><span>{Login_Create_Context_Item.AllUserDaata?.role}</span></li>
      </ul>
    </div>
  )
}

export default Header_system
