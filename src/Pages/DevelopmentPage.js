import { useEffect, useState } from "react";
import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart";
import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart";
import { Grid } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";
import {
  TerraContracts,
  TerraContractsQuery,
} from "../APIEndpoints/Terra-Contracts-Data";

export default function DevelopmentPage() {
  const [TerraContractsData, setTerraContractsData] = useState();

  useEffect(() => {
    TerraContracts().then((res) =>
      setTerraContractsData(ConvertToMultiAxisBarLineChart(res, true))
    );
  }, []);

  return (
    <>
      <div className="h2">Contracts</div>
      <Grid container spacing={2}>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
        <Grid item xs={12} md={8} sx={{ p: 1 }}>
          <MultiAxisBarLineChart
            key="Contracts Generation On Terra"
            chartDataLoad={TerraContractsData}
            chartSwapYAxis={true}
            chartQuery={TerraContractsQuery()}
            chartTitle={"Contracts Instantiated"}
            chartBackgroundColors={[
              CHARTCOLORS.SECONDARY,
              CHARTCOLORS.PRIMARYLIGHT,
            ]}
            chartYAxisLabel={[
              "Total Number Of Contracts",
              "Weekly New Contracts",
            ]}
          ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={0} md={2} sx={{ p: 1 }}></Grid>
      </Grid>
    </>
  );
}
