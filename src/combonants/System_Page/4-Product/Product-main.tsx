import React, { useContext, useState } from 'react'
import Table_Get_Data from './Product-item/Product_Table';
import "./style/style.scss";
import {BiSearch} from "react-icons/bi";
import {MdOutlineAddBox} from "react-icons/md"
import { motion } from 'framer-motion';
import Create_Prodect from "../Create_User&Product/Create_Prodect";
import { Product_Context } from '../../../context-api/product-context';
import { Login_Create_Context } from '../../../context-api/authntication-context';
import { Alert_Create_Context } from '../../../context-api/Alert_context';
import alertImage from "../../../assest/alert/alert1.gif";


function Product_main() {
  

  const Product_Context_Item=useContext(Product_Context);

  const Login_Create_ContextAuth=useContext(Login_Create_Context);
  const Alert_Create_Context_Section=useContext(Alert_Create_Context)


  const showCreateModel=()=>{
    if(Login_Create_ContextAuth.AllUserDaata.role=="admin"){
      Product_Context_Item.setshowCreatItem(true);
    }
    else{
      Alert_Create_Context_Section.setRunAlert({Value:"Just Admin Can Do That",image:alertImage})
    }

  }


  return (
    <motion.div className='container-product-main'
      initial={{x:"-100vw"}}
      animate={{x:0}}
      transition={{duration:.5}}>
        <ul className='create-product-header'>
            <li onClick={showCreateModel}><span><MdOutlineAddBox/></span><span>Create Product</span> </li>
            <li>
                <input type="text" placeholder='search ...' />
                <span><BiSearch/></span>
            </li>
        </ul>
        <Table_Get_Data/>
        {Product_Context_Item.showCreatItem  ?<Create_Prodect type="createProduct" />:<></>}
    </motion.div>
  )
}

export default Product_main
