import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const TimeLineChart = ({chartTitle, chartXAxisData, chartYAxisData, chartYAxisLabel, chartBackgroundColors}) => {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: chartTitle,
          },
        },
      };
      
      //const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      // x-axis
      const labels = chartXAxisData;

      // const data = {
      //   labels,
      //   datasets: [
      //     {
      //       label: 'Dataset 1',
      //       data: [5,3,3,4,6,3,4],
      //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //     },
      //     {
      //       label: 'Dataset 2',
      //       data: [52,3,-3,4,64,3,-4],
      //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //     },
      //   ],
      // };
      // y-axis
      const dataSets = []
      for (let index = 0; index < chartYAxisData.length; index++) {
        const yData = chartYAxisData[index];
        const yLabel = chartYAxisLabel[index];
        const yColor = chartBackgroundColors[index];
        dataSets.push({label: yLabel, data: yData, backgroundColor: yColor})
      }
      const data = {
        labels,
        datasets: dataSets,
      };

    return (
      <>
        <Line options={options} data={data} />
      </>
    );
  };
  
  export default TimeLineChart;