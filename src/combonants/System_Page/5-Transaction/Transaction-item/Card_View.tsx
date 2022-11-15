import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, modifyquantity } from "../../../../redux/addToCart";


function Card_View_Item({datause,data}:any) {
    datause.selectItemQuentuty=1
    const{Image,Price,productName,id}=datause;
    const dispatch=useDispatch();
    const selectData=useSelector((state:any)=>(state))
  

      //------------------------------- Add To cart Section --------------------------------------//
    const BuyItem=(event:any)=>{

    let Datause=data.filter((data:any)=>
    (data.id==event.currentTarget.getAttribute("datatype")))[0];

    const id=Datause.id;
    let  checkData= selectData.addToCartSlice.allProduct.findIndex((data:any)=>(data.id==id));

    if(checkData==-1){
      let DATA={selectItemQuentuty:1};
      let datahave={...Datause,...DATA}
      dispatch(addtocart(datahave))
    }else{
      let ItemSelect=selectData.addToCartSlice.allProduct.filter((data:any)=>(data?.id==id))
      //check Number Of Item Ihave In system 
      if((Number(ItemSelect[0].quantity)-Number(ItemSelect[0].selectItemQuentuty))===0){
        console.log("No More Item")

      }else{
        dispatch(modifyquantity(Datause))
      }
    }

  }

  return (
    <div className='item-view'  datatype={id} onClick={BuyItem}>
        <img src={Image} alt="" />
        <div className='text-area'>
        <p className='nameItem'>{productName}</p>
        <p className='price'>${Price}</p>
        </div>
    </div>
)
}

export default Card_View_Item
