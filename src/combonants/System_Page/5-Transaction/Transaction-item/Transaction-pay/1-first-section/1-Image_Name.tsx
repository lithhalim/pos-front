import React from 'react'

function Image_Name({datause}:any) {
    const {Image,Price,productName,}=datause;

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