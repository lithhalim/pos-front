import React from 'react'


function Total_Price_Section({TotalPrice}:any) {
  
  return (
    <ul className='price-section-total'>
      <li><span>subtotal</span><span>{TotalPrice-((TotalPrice*6)/100)}</span></li>
      <li><span>Tax</span><span>${(TotalPrice*6)/100}</span></li>
      <li><span>Grand Total</span><span>${TotalPrice}</span></li>
    </ul>
  )
}

export default Total_Price_Section
