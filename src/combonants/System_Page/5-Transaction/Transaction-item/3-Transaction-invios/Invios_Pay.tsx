import React from 'react'
import Header_Invios_Pay from './1-header-invios/Header_Invios_Pay';

import "./style/style.scss";
import image from "../../../../../assest/payment/payment-image.png"
import Footer_Invios_Section from './3-footer-invios/Footer_Invios_Section';
import Middel_Data from './2-Middel-data/Middel_Data';

function Invios_Pay() {

  return (
    <div className='invios-container'>
        <div className='Item-container'>
            <Header_Invios_Pay/>
            <Middel_Data />
            <Footer_Invios_Section/>
        </div>
        <div className='sideImage'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Invios_Pay
