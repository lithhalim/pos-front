import React from 'react';
import { Allproduct } from '../../../../../Interfaces/Interfaces_All';

interface AllProductData{
  datause:Allproduct
}

function Total_Price({datause}:AllProductData) {
    const {selectItemQuentuty,Price}=datause;

  return (
    <li>
            ${Number(Price)*Number(selectItemQuentuty)}
    </li>
)
}

export default Total_Price
