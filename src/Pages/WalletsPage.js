import { useEffect, useState } from "react"
import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart"
import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart"
import TimeBarChart from "../Components/TimeBarChart"
import { Grid } from "@mui/material"
import { CHARTCOLORS } from "../Constants/Colors"
import { Spinner } from "reactstrap"

import TerraWeeklyActive from "../APIEndpoints/Terra-Weekly-Active-Data"
import TerraWeeklyUnique from "../APIEndpoints/Terra-Weekly-Unique-Sender-Data"

export default function WalletsPage() {
    const [TerraWeeklyActiveData, setTerraWeeklyActiveData] = useState();
    const [TerraWeeklyUniqueData, setTerraWeeklyUniqueData] = useState();

    useEffect(() => {
        TerraWeeklyActive().then(res => setTerraWeeklyActiveData(ConvertToMultiAxisBarLineChart(res, true)))
        TerraWeeklyUnique().then(res => setTerraWeeklyUniqueData(ConvertToMultiAxisBarLineChart(res, true)))
        
    }, [])

    if (   TerraWeeklyActiveData === undefined
        || TerraWeeklyUniqueData === undefined
    )
    {
        return <Spinner></Spinner>
    }

    //console.log(TerraContractsData)

    return <>
    <div className="h2">Wallets</div>
    <Grid container spacing={2}>
        <Grid item xs={6} sx={{p:1}}>
            <TimeBarChart
                key="undef"
                chartXAxisData={TerraWeeklyActiveData.xAxis}
                chartTitle={""}
                chartBackgroundColors={[CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraWeeklyActiveData.yAxis]}
                chartYAxisLabel={["Weekly Active Users"]}
            ></TimeBarChart>
        </Grid>
        <Grid item xs={6} sx={{p:1}}>
            <MultiAxisBarLineChart
                key="undef2"
                chartXAxisData={TerraWeeklyUniqueData.xAxis}
                chartTitle={"Weekly New Users"}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraWeeklyUniqueData.yAxis2, TerraWeeklyUniqueData.yAxis]}
                chartYAxisLabel={["Total Number Of Senders", "Weekly New Senders"]}
            ></MultiAxisBarLineChart>
        </Grid>
    </Grid></>
}