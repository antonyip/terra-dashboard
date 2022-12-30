import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

import { CHARTCOLORS } from "../Constants/Colors";
import SQLButton from "./SQLButton";
import CSVButton from "./CSVButton";
import { Grid, Typography, Card, CardContent, ButtonGroup } from "@mui/material";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const MultiAxisBarLineChart = ({
  chartTitle,
  chartXAxisData,
  chartYAxisData,
  chartYAxisLabel,
  chartBackgroundColors,
}) => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: chartTitle,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // x-axis
  const labels = chartXAxisData;
  // y-axis
  const dataSets = [];
  for (let index = 0; index < chartYAxisData.length; index++) {
    const yData = chartYAxisData[index];
    const yLabel = chartYAxisLabel[index];
    const yColor = chartBackgroundColors[index];
    var yType = "line";
    var yIndex = "y";
    if (index !== 0) {
      yIndex = yIndex + index.toString();
      yType = "bar";
    }
    dataSets.push({
      label: yLabel,
      data: yData,
      borderColor: CHARTCOLORS.SECONDARYLIGHT,
      backgroundColor: yColor,
      yAxisID: yIndex,
      type: yType,
    });
  }
  //console.log(JSON.stringify(dataSets));
  const data = {
    labels,
    datasets: dataSets,
  };

  return (
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
        <Chart options={options} data={data} />
      </CardContent>
    </Card>
  );
};

export default MultiAxisBarLineChart;
