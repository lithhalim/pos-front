import React, { useEffect, useRef, useState } from 'react'


import io from 'socket.io-client';
const socket = io(`${process.env.REACT_APP_API}`);


function Chate_View({datause,AllMassages}) {

    const [datamassage,setdatamassage]=useState([]);


    useEffect(()=>{
        socket.on("get-massage",(data)=>{
            setdatamassage(oldData=>[...oldData,data]); 

        })
      },[socket]);

    useEffect(()=>{
        socket.emit("joinMyroom",datause.regusterid)
    },[])
    


    useEffect(()=>{
        setdatamassage(AllMassages)
    },[AllMassages])

    const massage_Filed=useRef();

    const getdata=(event)=>{
        event.preventDefault()
        const {Image,fullName,regusterid,role}=datause;
        let Datasend={Image:Image,fullName:fullName,regusterid:regusterid,role:role,text:massage_Filed.current.value,time:Date.now()}
        socket.emit("Send_Massage",Datasend);
        massage_Filed.current.value=""
      }
    


    


  return (
    <>
        <div className='chate-view'>
            {datamassage.length>0? datamassage.map(({Image,fullName,regusterid,role,text,time},i)=>(
                <div className='item-container-chate'>
                    <div className='image-container'>
                        <img src={Image} alt="" />
                    </div>
                    <div className='text-area'>
                        <ul className='data'>
                            <li>{fullName}</li>
                            <li>{role}</li>
                            <li>{time}</li>
                        </ul>
                        <p>{text}</p>
                    </div>
                </div>
            )):<></>}
        
        </div>
        <div className='chate_input-section'>
            <form action="">
                <input type="text" name="data" ref={massage_Filed} />
                <button onClick={getdata}>Send</button>
            </form>
        </div>
    </>
  )
}

export default Chate_View
