import React from 'react';
import Transaction_data from './Transaction-data';


function Transaction_header({catagories}:any) {

    const getData=(event:any)=>{
        catagories(event.currentTarget.getAttribute("datatype"))
        let Item=event.currentTarget
        //Remove Active All Item
        Item.parentElement.childNodes.forEach((data:any)=>{
            data.classList.remove("active");
        })
        //Add Class To Specific Item
        Item.classList.add("active");

    }


  return (
    <ul className='header-transction'>
        {Transaction_data.map(({value,name},i)=>(
            <li onClick={getData} datatype={value} key={i}><span>{name}</span> </li>
        ))}
    </ul>
  )
}

export default Transaction_header
