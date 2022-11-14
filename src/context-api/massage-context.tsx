import React, { useState } from "react";

//use to create the context 
export const Massage_Context=React.createContext<any|null>(null);


export function Massage_Provider(props:any) {
const [massagess,setmassagess]=useState(false);


  return (
    <Massage_Context.Provider value={{massagess,setmassagess}}>
        {props.children}
    </Massage_Context.Provider>
  ) 
}
