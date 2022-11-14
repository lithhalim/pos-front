import React, { useContext, useEffect } from 'react';

import io from 'socket.io-client';
import { Massage_Context } from '../../../../../context-api/massage-context';
const socket = io(process.env.REACT_APP_API);

function Chate_Input({datause}) {
  const Massage_Context_Item=useContext(Massage_Context);



  const getData=(event)=>{
    event.preventDefault()
    datause.text=event.target.data.value;
    datause.time=Date.now();
    event.target.data.value="";
    delete datause.exp; 
    delete datause.iat; 
    socket.emit("massage-send",datause);
    Massage_Context_Item.setmassagess(datause)

  }

  useEffect(()=>{
    socket.on("get-massage",(data)=>{
      Massage_Context_Item.setmassagess(data)
    })
  },[socket])


  return (
    <div className='chate_input-section'>
      <form action="" onSubmit={getData}>
        <input type="text" name="data" />
      </form>
    </div>
  )
}

export default Chate_Input
