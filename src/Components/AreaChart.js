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
  Filler,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { CHARTCOLORS } from "../Constants/Colors";
import SQLButton from "./SQLButton";
import JSONButton from "./JSONButton";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  ButtonGroup,
} from "@mui/material";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Legend,
  Filler,
  Tooltip,
  LineController,
  BarController
);

const AreaChart = ({
  chartDataLoad,
  chartTitle,
  chartYAxisLabel,
  chartBackgroundColors,
}) => {
  const chartXAxisData = chartDataLoad.xAxis;
  var chartYAxisData = chartDataLoad.yAxis;

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = chartXAxisData;

  const dataSets = [];
  for (let index = 0; index < chartYAxisData.length; index++) {
    const yData = chartYAxisData[index];
    const yLabel = chartYAxisLabel[index];
    const yColor = chartBackgroundColors[index];
    dataSets.push({
      fill: true,
      label: yLabel,
      data: yData,
      radius: 0,
      backgroundColor: yColor,
    });
  }
  const data = {
    labels,
    datasets: dataSets,
  };

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <Typography color={CHARTCOLORS.PRIMARYLIGHT} sx={{ fontSize: 22 }}>
              {chartTitle}
            </Typography>
          </Grid>
          <Grid container item xs={2} justifyContent="flex-end">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <SQLButton sqlLink="asdad"></SQLButton>
              <JSONButton jsonData={chartDataLoad} jsonFilename={chartTitle}></JSONButton>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Line options={options} data={data} />
      </CardContent>
    </Card>
  );
};

export default AreaChart;
