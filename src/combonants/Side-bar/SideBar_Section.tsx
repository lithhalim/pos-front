import React from 'react'
import { useNavigate } from 'react-router-dom';
import {DataSideBar} from './Sidebar-Data';

import "./style/style.scss";
import image from "../../assest/logo.png"



function SideBar_Section() {

    const Navi=useNavigate();


    const addAcctive=(event:any)=>{

        let Item=event.currentTarget
        //Remove Active All Item
        Item.parentElement.childNodes.forEach((data:any)=>{
            data.classList.remove("active");
        })
        //Add Class To Specific Item
        Item.classList.add("active");
        document.querySelector(".sidebar-section")?.classList.toggle("active")
        Navi(Item.getAttribute("datatype"))
    }
  return (
    <div className='sidebar-section'>
        <img src={image} alt=""  />
        {DataSideBar.map(({name,icon,path},i)=>(
            <div className='icon-container' datatype={path} onClick={addAcctive} key={i}>
                <p>{icon}</p>
                <p>{name}</p>
            </div>
        ))}
      
    </div>
  )
}

export default SideBar_Section
