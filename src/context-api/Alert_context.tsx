import React, { useState } from "react";

//use to create the context 
export const  Alert_Create_Context=React.createContext<any|null>(null);


interface ContextChildreen{
  children:React.ReactNode
}



export function Alert_Provider(props:ContextChildreen) {
    const [RunAlert,setRunAlert]=useState(false)

  return (
    <Alert_Create_Context.Provider value={{RunAlert,setRunAlert}}>
        {props.children}
    </Alert_Create_Context.Provider>
  ) 
}
