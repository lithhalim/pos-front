import React, { useState } from "react";

//use to create the context 
export const Product_Context=React.createContext<any|null>(null);


export function Product_Provider(props:any) {
const [showCreatItem,setshowCreatItem]=useState(false);
const [showCreateUser,setshowCreateUser]=useState(false);


  return (
    <Product_Context.Provider value={{showCreatItem,setshowCreatItem,showCreateUser,setshowCreateUser}}>
        {props.children}
    </Product_Context.Provider>
  ) 
}
