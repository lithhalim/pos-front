import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import Loding_Page from '../../loading/Loding-Page';
import Dashboard_Information from './1-Dashboard-Information/Dashboard_Information';
import { DashboardChart } from './2-Dashboard-chart/Dashboard-chart';
import { DashboardBar } from './3-Dashboard-transaction/Dashborad-transaction';
import "./style/style.scss"

function Dashbord_main() {





    function usePosts() {
      return useQuery([`getInvios`], async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}getInvios`);
        return data;
      });
    }  

  const { status, data, error, isLoading,refetch } = usePosts();

  if(isLoading){
    return(<Loding_Page/>)
  }


  return (
    <>{data!==undefined?
        <div className='container-dashboard-main'>
            <Dashboard_Information datause={data}/>
            <div className='secand-section'>
              <DashboardChart datause={data}/>
              <DashboardBar datause={data}/>
            </div>
        </div>
      :<></>}
    </>
  )
}

export default Dashbord_main
