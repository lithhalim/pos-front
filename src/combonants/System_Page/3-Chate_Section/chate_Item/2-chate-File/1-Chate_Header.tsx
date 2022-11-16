import React from 'react';
import {BiSearch} from "react-icons/bi"
import {BsPersonCircle} from "react-icons/bs"

function Chate_Header({datause}:any) {
    const showConnection=()=>{
        document.querySelector(".commenecation-frind")?.classList.toggle("active")
    }
  return (
    <div className='header'>
        <div className='showList' onClick={showConnection}>
            <BsPersonCircle/>
        </div>
        <ul className='search'>
            <li><BiSearch/></li>
            <li><input type="text" placeholder='search People' /></li>
        </ul>
        <img src={datause.Image} alt="" />
    </div>
)
}

export default Chate_Header