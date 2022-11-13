import React from 'react'
import Dashboard_Information from './1-Dashboard-Information/Dashboard_Information';
import { DashboardChart } from './2-Dashboard-chart/Dashboard-chart';
import { DashboardBar } from './3-Dashboard-transaction/Dashborad-transaction';
import "./style/style.scss"

function Dashbord_main() {
  return (
    <div className='container-dashboard-main'>
        <Dashboard_Information/>
        <div className='secand-section'>
          <DashboardChart/>
          <DashboardBar/>
        </div>
    </div>
  )
}

export default Dashbord_main
