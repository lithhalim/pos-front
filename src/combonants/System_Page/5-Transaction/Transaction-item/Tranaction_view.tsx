import React, { useState,Suspense } from 'react'
import Transaction_header from './Transaction_header';
import {useQuery} from "@tanstack/react-query"
import axios from 'axios';
import Card_View_Item from "./Card_View"
import Loding_Page from '../../../loading/Loding-Page';




function Tranaction_view() {
  const [newCatagories,setnewCatagories]=useState("All Item");



  function usePosts() {
    return useQuery([`getItemSection`,newCatagories], async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}getpostesCatagory/${newCatagories}`);
      return data;
    });
  }  

  const {  data, error, isLoading, } = usePosts();


  if(isLoading){return (<Loding_Page/>)}





  return (
    <div className='container-view-section'>
        <Transaction_header catagories={(data:any)=>{setnewCatagories(data)}}/>
        <div className='container-viewItem'>
            {data!==undefined?data.map((datause:any,i:any)=>(
                <Card_View_Item key={i} datause={datause} data={data}/>
            )):<></>}
        </div>
    </div>
  )
}

export default Tranaction_view