import React from 'react';
import { DataInformationDashboard } from './Data-information';
import "./style/style.scss";

import { motion } from 'framer-motion';

function Dashboard_Information() {
  return (
    <div className='container-information-dashboard'>
        {DataInformationDashboard.map(({color,name,icon},i)=>(
            <motion.ul className='item-information-container' 
            initial={{x:"-100vw"}} animate={{x:0}}
            transition={{duration:1}}
            key={i} style={{backgroundColor:color}}>
                <li>
                    <p className='number-add'>9</p>
                    <p>{name}</p>
                </li>
                <li>{icon}</li>
            </motion.ul>
        ))}
    </div>
  )
}

export default Dashboard_Information
