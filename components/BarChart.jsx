'use client'
import React,{useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale, 
    BarElement,
    Title, 
    Tooltip, 
    Legend } from "chart.js";

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

const BarChart = () => {

    const[chartData,setChartData] = useState ({
        datasets: [],
    });

    const [chartOptions,setChartOptions] = useState({});

   useEffect(() => {
    setChartData({
        labels : ['Mon', 'Tues','Wed','Thurs','Fri','Sat','Sun'],
        datasets:[
            {
                label:'Sales $',
                data: [18127,21245,16432,23522,13563,17434,24268],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor:'#4942E4',
            },
            {
                label:'No. of Customers ',
                data: [9127,12445,7432,18522,3563,11734,10268],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor:'#C4B0FF',
            
            },
        ]
                
    })
    setChartOptions({
        
        plugins:{
            legend: {
              position:"top",
            },
            title:{
                display:true,
                text:'Daily Revenue'
            }
        },
        maintainAspectRatio:false,
        responsive: true    
    })
   }, [])

  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white shadow-xl'>
            <Bar data= {chartData} options = {chartOptions} />
        </div>

    </>
  )
}

export default BarChart