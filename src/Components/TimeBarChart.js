import React from 'react';
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

import { CHARTCOLORS } from "../Constants/Colors";
import SQLButton from "./SQLButton";
import CSVButton from "./CSVButton";
import { Grid, Typography, Card, CardContent, ButtonGroup } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TimeBarChart = ({chartTitle, chartXAxisData, chartYAxisData, chartYAxisLabel, chartBackgroundColors}) => {

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
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={10}>
                <Typography color={CHARTCOLORS.PRIMARYLIGHT} sx={{fontSize:22}}>{chartTitle}</Typography>
              </Grid>
              <Grid container item xs={2} justifyContent="flex-end">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <SQLButton sqlLink="asdad"></SQLButton>
                  <CSVButton sqlLink="asdad"></CSVButton>
                </ButtonGroup>
              </Grid>
            </Grid>
            <Bar options={options} data={data} />
          </CardContent>
        </Card>
      </>
    );
  };
  
  export default TimeBarChart;