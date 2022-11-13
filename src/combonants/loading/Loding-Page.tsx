import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import "./style.scss"
function Loding_Page() {
  return (
    <div className='loading-item-container-section'>
        <RingLoader color="rgb(30, 12, 49)"  />
    </div>  )
}

export default Loding_Page
