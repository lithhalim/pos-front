import React, { useContext } from 'react';
import "./style/style.scss";
import {motion} from "framer-motion";
import {BsXCircle} from "react-icons/bs";


import Item_Details2 from './1-Upload_Information';
import { Product_Context } from '../../../context-api/product-context'; 


//Datause In Create Section
import Data_Details from './DataWillUse/CreateProductData';
import createImage from "../../../assest/create-item/create-item.png";
import Data_UserCreate from './DataWillUse/CreateUserData';




function Create_Prodect({type}) {


  let datause
    switch(type) {
      case "createProduct":
        datause={
          image:createImage,
          Data_Details:Data_Details,
          headerName:"Create Item",
          contextNameset:"setshowCreatItem",
          contextName:"showCreatItem",
        }
        break;
      case "createUser":
          datause={
            image:createImage,
            Data_Details:Data_UserCreate,
            headerName:"Create User",
            contextNameset:"setshowCreateUser",
            contextName:"showCreateUser",
          }
        break;
  
    }
  

    const Product_Context_Item=useContext(Product_Context);

  

  return (
    <motion.div className='container-create-Product'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>

        <ul className='header-create'>
            <li></li>
            <li>{datause.headerName}</li>
            <li onClick={()=>{Product_Context_Item[datause.contextNameset](false)}}><BsXCircle/></li>
        </ul>
        <div className='container-secand'>  
            <Item_Details2 Data_Details={datause?.Data_Details} datause={datause}/>
            <div className='image-container'>
                <img src={datause?.image} alt="" />
            </div>
        </div>

    </motion.div>
  )
}

export default Create_Prodect