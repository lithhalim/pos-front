import React from 'react';
import { DataInformationDashboard } from './Data-information';
import "./style/style.scss";

import { motion } from 'framer-motion';
function Dashboard_Information({datause}) {

  let TotalIncons=Math.floor(datause.reduce((acc,data)=>(acc+Number(data.TotalPrice)),0))
  DataInformationDashboard[0].value=datause.length;
  DataInformationDashboard[1].value=TotalIncons;
  DataInformationDashboard[2].value=(TotalIncons*(6/100));
  DataInformationDashboard[3].value=datause.length;
  


  return (
    <div className='container-information-dashboard'>
        {DataInformationDashboard.map(({color,name,icon,value},i)=>(
            <motion.ul className='item-information-container' 
            initial={{x:"-100vw"}} animate={{x:0}}
            transition={{duration:1}}
            key={i} style={{backgroundColor:color}}>
                <li>
                    <p className='number-add'>{value}</p>
                    <p>{name}</p>
                </li>
                <li>{icon}</li>
            </motion.ul>
        ))}
    </div>
  )
}

export default Dashboard_Information
