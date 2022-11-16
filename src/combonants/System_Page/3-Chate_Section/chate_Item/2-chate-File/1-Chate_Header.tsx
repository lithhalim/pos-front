import React from 'react';
import {BiSearch} from "react-icons/bi"


function Chate_Header({datause}:any) {
  return (
    <div className='header'>
        <ul className='search'>
            <li><BiSearch/></li>
            <li><input type="text" placeholder='search People' /></li>
        </ul>
        <img src={datause.Image} alt="" />
    </div>
)
}

export default Chate_Header