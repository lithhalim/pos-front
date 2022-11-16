import React, { useContext } from 'react';
import "./style/style.scss";
import {motion} from "framer-motion"
import { Product_Context } from '../../../context-api/product-context';
import {MdOutlineAddBox} from "react-icons/md";
import Create_Prodect from '../Create_User&Product/Create_Prodect';
import Table_Get_Data_AllUser from './User-Table/User_Table';


function User_Section() {
 const Product_Context_Item=useContext(Product_Context);
 

  
  return (
    <motion.div className='container-product-main'
      initial={{x:"-100vw"}}
      animate={{x:0}}
      transition={{duration:.5}}>
        <ul className='create-product-header'>
            <li onClick={()=>{Product_Context_Item.setshowCreateUser(true)}}><span><MdOutlineAddBox/></span><span>Create User</span> </li>
            <li style={{border:"none"}}></li>
        </ul>
        <Table_Get_Data_AllUser/>
        {Product_Context_Item.showCreateUser  ?<Create_Prodect type="createUser" />:<></>}
    </motion.div>
  )
}

export default User_Section