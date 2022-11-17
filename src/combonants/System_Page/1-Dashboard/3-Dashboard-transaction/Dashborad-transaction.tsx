import React from 'react';
import { DataChart } from '../../../Interfaces/Interfaces_All';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Last 10 Transaction ',
    },
  },
};


interface ArrayDataChart{
  datause:DataChart[]
}


export function DashboardBar({datause}:ArrayDataChart) {


  const labels = datause.filter((data:DataChart,i:number)=>(i<25)).map((data:DataChart,i:number)=>{return (data.createdAt.slice(0,6))});
  const data = {
    labels,
    datasets: [
      {
        label: 'Total Price',
        data: datause.map((data:DataChart,i:number)=>{return data.TotalPrice}),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "Number Item",
        data:datause.map((data:DataChart,i:number)=>{return data.NumberItem}),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className='chart-section'> 
        <Bar options={options} data={data} />
    </div>
  )
}
