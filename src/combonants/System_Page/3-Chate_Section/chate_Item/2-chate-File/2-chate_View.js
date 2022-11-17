import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

import {AiOutlineSend} from "react-icons/ai"




import io from 'socket.io-client';
import Recive_Massage from './Chate_Card/Recive_Massage';
import Send_Massage from './Chate_Card/Send_Massage';
const socket = io(`${process.env.REACT_APP_API}`,);


function Chate_View({datause}) {
    const [datamassage,setdatamassage]=useState([]);
    const {Image,fullName,regusterid:id,role}=datause;

    // Get All Massage Save Database First Time
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API}getdata`).then((data)=>{
            setdatamassage(data.data)
        })
    },[])
  

    //Get All New Massage From Socket Io
    useEffect(()=>{
        //The Recive Massages
        socket.on("recivemassage",(data)=>{
            setdatamassage((olddatadata)=>[...olddatadata,data])
        })
        // Remove Dubliccate The Function Section
        return function cleanup() {
            socket.removeListener("recivemassage");
        };  
    },[socket])


    //New Massage You Accepted
    const massage_Filed=useRef();
    const getdata=(event)=>{
        event.preventDefault()
        let Datasend={Image:Image,fullName:fullName,regusterid:id,role:role,text:massage_Filed.current.value,time:new Date()}
        massage_Filed.current.value="";
        socket.emit("sendmassage",Datasend)
    }
    


    


  return (
    <>
        <div className='chate-view'>
            {datamassage.length>0? datamassage.map((dataUse,i)=>(
                <div key={i}>
                    {id==dataUse.regusterid?<Recive_Massage dataUse={dataUse}  />:
                    <Send_Massage dataUse={dataUse}  />
                    }
                </div>
            )):<></>}
        
        </div>
        <div className='chate_input-section'>
            <form action="">
                <input type="text" name="data" ref={massage_Filed} />
                <button onClick={getdata}>Send <AiOutlineSend/></button>
            </form>
        </div>
    </>
  )
}

export default Chate_View
