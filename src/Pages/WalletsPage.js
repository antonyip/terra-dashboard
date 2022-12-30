import { useEffect, useState } from "react";
import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart";
import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart";
import TimeBarChart from "../Components/TimeBarChart";
import { Grid } from "@mui/material";
import { CHARTCOLORS } from "../Constants/Colors";

import { TerraWeeklyActive, TerraWeeklyActiveQuery } from "../APIEndpoints/Terra-Weekly-Active-Data";
import { TerraWeeklyUnique, TerraWeeklyUniqueQuery } from "../APIEndpoints/Terra-Weekly-Unique-Sender-Data";
import { Terra100Richlist, Terra100RichlistQuery } from "../APIEndpoints/Terra-100RichList-Data";
import ConvertToTimeBarChart from "../Converters/ConvertToTimeBarChart";

export default function WalletsPage() {
  const [TerraWeeklyActiveData, setTerraWeeklyActiveData] = useState();
  const [TerraWeeklyUniqueData, setTerraWeeklyUniqueData] = useState();
  const [TerraRichList, setTerraRichList] = useState();

  useEffect(() => {
    TerraWeeklyActive().then((res) =>
      setTerraWeeklyActiveData(ConvertToMultiAxisBarLineChart(res, true))
    );
    TerraWeeklyUnique().then((res) =>
      setTerraWeeklyUniqueData(ConvertToMultiAxisBarLineChart(res, true))
    );
    Terra100Richlist().then((res) =>
      setTerraRichList(ConvertToTimeBarChart(res, false))
    );
  }, []);

  return (
    <>
      <div className="h2">Wallets</div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sx={{ p: 1 }}>
          <TimeBarChart
            chartDataLoad={TerraRichList}
            chartTitle={"Top 100 Rich List"}
            chartQuery={Terra100RichlistQuery()}
            chartBackgroundColors={[CHARTCOLORS.PRIMARYLIGHT]}
            chartYAxisLabel={["Luna"]}
          ></TimeBarChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <TimeBarChart
            chartDataLoad={TerraWeeklyActiveData}
            chartTitle={"Weekly Active Users"}
            chartQuery={TerraWeeklyActiveQuery()}
            chartBackgroundColors={[CHARTCOLORS.PRIMARYLIGHT]}
            chartYAxisLabel={["Weekly Active Users"]}
          ></TimeBarChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <MultiAxisBarLineChart
            chartDataLoad={TerraWeeklyUniqueData}
            chartSwapYAxis={true}
            chartTitle={"Weekly New Users"}
            chartQuery={TerraWeeklyUniqueQuery()}
            chartBackgroundColors={[
              CHARTCOLORS.SECONDARY,
              CHARTCOLORS.PRIMARYLIGHT,
            ]}
            chartYAxisLabel={["Total Number Of Senders", "Weekly New Senders"]}
          ></MultiAxisBarLineChart>
        </Grid>
      </Grid>
    </>
  );
}
