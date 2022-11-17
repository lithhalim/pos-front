import React, { useState } from "react";

interface ContextChildreen{
  children:React.ReactNode
}

//use to create the context 
export const Product_Context=React.createContext<any|null>(null);


export function Product_Provider(props:ContextChildreen) {

const [showCreatItem,setshowCreatItem]=useState<boolean>(false);
const [showCreateUser,setshowCreateUser]=useState<boolean|string>(false);


  return (
    <Product_Context.Provider value={{showCreatItem,setshowCreatItem,showCreateUser,setshowCreateUser}}>
        {props.children}
    </Product_Context.Provider>
  ) 
}
