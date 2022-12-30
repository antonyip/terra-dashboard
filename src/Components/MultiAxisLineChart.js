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

const MultiAxisLineChart = ({chartTitle, chartXAxisData, chartYAxisData, chartYAxisLabel, chartBackgroundColors}) => {

      const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: chartTitle,
          },
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
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
      //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //       borderColor: 'rgb(255, 99, 132)',
      //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
      //       yAxisID: 'y',
      //     },
      //     {
      //       label: 'Dataset 2',
      //       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //       borderColor: 'rgb(53, 162, 235)',
      //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //       yAxisID: 'y1',
      //     },
      //   ],
      // };
      // y-axis
      const dataSets = []
      for (let index = 0; index < chartYAxisData.length; index++) {
        const yData = chartYAxisData[index];
        const yLabel = chartYAxisLabel[index];
        const yColor = chartBackgroundColors[index];
        var yIndex = 'y'
        if (index !== 0) {
          yIndex = yIndex + index.toString()
        }
        dataSets.push({label: yLabel, data: yData, backgroundColor: yColor, yAxisID: yIndex})
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
  
  export default MultiAxisLineChart;