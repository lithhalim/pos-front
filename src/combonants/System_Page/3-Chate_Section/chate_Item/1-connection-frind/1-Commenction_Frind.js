import React, { useContext, useEffect, useState } from 'react';
import "../style/style.scss";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loding_Page from '../../../../loading/Loding-Page';
import { Login_Create_Context } from '../../../../../context-api/authntication-context';

import io from 'socket.io-client';
const socket = io(process.env.REACT_APP_API);

function Commenction_Frind() {
  const Login_Create_Context_User=useContext(Login_Create_Context).AllUserDaata;
  const [OnlineUser,setOnlineUser]=useState(false)
  

  //----------------------------Set Online User Section -----------------------------//
  useEffect(() => {socket.emit('JoinRoom', Login_Create_Context_User?.regusterid);},[])
  useEffect(()=>{
    socket.on("online-frend",(data)=>{
      setOnlineUser(Object.keys(data))
    })
  },[socket])



  function usePosts() {
    return useQuery([`getDataHave`], async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}getAllData`);
      return data;
    });
  }  

  const { status, data, error, isLoading } = usePosts();

  if(isLoading){
    return(<Loding_Page/>)
  }



  return (
    <>
    <div className='commenecation-frind'>
      <div className='header-connection'>
        <p>All User In Chate Room</p>
      </div>
      {data!==undefined?data.map(({Image,action,fullName,role,regusterid},i)=>(
        <>
          {Login_Create_Context_User?.regusterid!==regusterid?
              <ul className='container-item' key={i}>
                  <li>
                    <img src={Image} alt="" />
                  </li>
                  <li>
                      <h4>{fullName}</h4>
                      <p>{OnlineUser!==false?(OnlineUser.includes(regusterid)?<span></span>:<></>):<></>} {role}</p>
                  </li>
              </ul>
              :<></>}
          </>
        )):<></>}

    </div>
    </>
  )
}

export default Commenction_Frind