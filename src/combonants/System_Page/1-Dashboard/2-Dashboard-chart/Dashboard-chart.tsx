import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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



export function DashboardChart({datause}:any) {

  const labels = datause.map((data:any,i:any)=>{return (data.createdAt.slice(0,6))})
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Transaction',
        data:datause.map((data:any,i:any)=>{return data.TotalPrice}),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],}


  return (
            <div className='chart-section'> 
                <Line options={options} data={data} />
            </div>
        )
}
