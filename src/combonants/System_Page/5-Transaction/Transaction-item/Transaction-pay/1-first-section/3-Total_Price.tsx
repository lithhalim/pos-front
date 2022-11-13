import React from 'react'

function Total_Price({datause}:any) {
    const {selectItemQuentuty,Price}=datause
  return (
    <li>
            ${Number(Price)*Number(selectItemQuentuty)}
    </li>
)
}

export default Total_Price
