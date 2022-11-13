import React from 'react';
import "./style/style.scss";
import {  useSelector } from 'react-redux';
import Image_Name from './1-first-section/1-Image_Name';
import AddRemove_Item from './1-first-section/2-Add&Remove_Item';
import Button_Section from './3-Thired-section/Button_Section';
import Total_Price_Section from '../Transaction-pay/2-secand-section/Total_Price';
import Total_Price from './1-first-section/3-Total_Price';



function Transaction_pay() {
  const selectData=useSelector((state:any)=>(state.addToCartSlice.allProduct));
  let TotalPrice=selectData.reduce((acc:any,data:any)=>(acc+(Number(data.Price)*Number(data.selectItemQuentuty))),0)


  return (
    <div className='Crat-section'>
      <h3>Cart Shoping </h3>

      {/* //--------------------------First Section ---------------------------------// */}
      <div className='container-all-itempay'>
          {selectData.length>0?selectData.map((data:any,i:any)=>(
              <ul className='item-container'>
                <Image_Name datause={data}/>
                  <AddRemove_Item datause={data}/>
                <Total_Price  datause={data}/>
              </ul>)):
          <></>}
      </div>

      {/* //------------------------- Secand Section ----------------------------------// */}
      <Total_Price_Section TotalPrice={TotalPrice}/>
      {/* //------------------------- thired Section ----------------------------------// */}
      <Button_Section AllData={selectData} TotalPrice={TotalPrice}/>
    </div>
  )
}

export default Transaction_pay