import React, { useEffect } from 'react'
import Commenction_Frind from './chate_Item/1-connection-frind/1-Commenction_Frind';
import Chate_Zone from './chate_Item/2-chate-File/Chate_Zone';
import "./style/style.scss";

function Chate_Section() {



  return (
    <div className='container-chate-section'>
        <Commenction_Frind/>
        <Chate_Zone/>
    </div>
  )
}

export default Chate_Section
