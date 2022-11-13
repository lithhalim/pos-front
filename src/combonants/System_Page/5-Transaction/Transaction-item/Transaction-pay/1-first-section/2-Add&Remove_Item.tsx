import React from 'react';
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai";
import {  useSelector,useDispatch } from 'react-redux';
import { modifyquantity, modifyquantitydecrese, removeFromCart } from '../../../../../../redux/addToCart';



function AddRemove_Item({datause}:any) {
    const {Image,Price,id,productName,selectItemQuentuty}=datause;
    const dispatch=useDispatch();
    const selectData=useSelector((state:any)=>(state.addToCartSlice?.allProduct));


    //Increse and Decrease Button
    const increseQuntity=(event:any)=>{
    let [id,Image,productName,Price,selectItemQuentuty]=event.currentTarget.getAttribute("datatype").split("###");


    let ItemSelect=selectData.filter((data:any)=>(data?.id==id))
    //check Number Of Item Ihave In system 
    if((Number(ItemSelect[0].quantity)-Number(ItemSelect[0].selectItemQuentuty))===0){
      console.log("empty item")
    }else{
      dispatch(modifyquantity({id:id,Image:Image,productName:productName,Price:Price}))
    }
  
  }

  const decreseQuntity=(event:any)=>{
    let [id,Image,productName,Price,selectItemQuentuty]=event.currentTarget.getAttribute("datatype").split("###");
    if(selectItemQuentuty>1){
      dispatch(modifyquantitydecrese({id:id,Image:Image,productName:productName,Price:Price}))
    }else{
      dispatch(removeFromCart(id))
    }

  }

  return (
    <li>
        <span onClick={decreseQuntity} datatype={`${id}###${Image}###${productName}###${Price}###${selectItemQuentuty}`}><AiOutlineMinusCircle/></span>
        <p>{selectItemQuentuty}</p>
        <span onClick={increseQuntity} datatype={`${id}###${Image}###${productName}###${Price}###${selectItemQuentuty}`}><AiOutlinePlusCircle/></span>
    </li>
)
}

export default AddRemove_Item
