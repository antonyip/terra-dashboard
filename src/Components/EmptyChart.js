import React from 'react';

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
LineElement,
PointElement,
LineController,
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
LineController,
Title,
Tooltip,
Legend
);

const EmptyChart = ({chartTitle}) => {

const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: false,
        text: chartTitle,
        },
    },
    };
    
    const labels = [''];

    const data = {
    labels,
    datasets: [
        {
        label: '',
        data: [''],
        backgroundColor: 'rgba(50, 50, 50, 0.01)',
        },
    ],
    };

    return (
        <Line options={options} data={data} />
    );
}
export default EmptyChart