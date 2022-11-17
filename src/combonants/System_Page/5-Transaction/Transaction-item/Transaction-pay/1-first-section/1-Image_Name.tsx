import React from 'react'

import { Allproduct } from '../../../../../Interfaces/Interfaces_All';
interface AllproductUse{
    datause:Allproduct
}

function Image_Name({datause}:AllproductUse) {
    const {Image,Price,productName}=datause;

  return (
    <li>
        <img src={Image} alt="" />
        <div className='text-area'>
            <p>{productName}</p>
            <p>${Price}</p>
        </div>
    </li>
)
}

export default Image_Name