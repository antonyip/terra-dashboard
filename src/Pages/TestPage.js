import { useEffect, useState } from "react"
import MultiAxisLineChart from "../Components/MultiAxisLineChart"
import TimeBarChart from "../Components/TimeBarChart"
import TimeLineChart from "../Components/TimeLineChart"
import TerraTPS from "../APIEndpoints/Terra-TPS-Data"
import ConvertToTimeBarChart from "../Converters/ConvertToTimeBarChart"
import { Grid } from "@mui/material"

export default function SummaryPage() {

    const [TerraTPSData, setTerraTPSData] = useState();

    useEffect(() => {
        TerraTPS().then(res => setTerraTPSData(ConvertToTimeBarChart(res, true)))
    }, [])

    return <>
    <div>SummaryPage</div>
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TimeBarChart
                key="TPS"
                chartXAxisData={TerraTPSData.xAxis}
                chartTitle={"TPS Chart"}
                chartBackgroundColors={['rgba(53, 162, 235, 0.5)']}
                chartYAxisData={[TerraTPSData.yAxis]}
                chartYAxisLabel={["Tx Count"]}
            ></TimeBarChart>
        </Grid>
        <Grid item xs={4}>
            
        </Grid>
        <Grid item xs={4}>
            
        </Grid>
        <Grid item xs={8}>
            
        </Grid>
    </Grid>

    <TimeBarChart 
        key="c1"
        chartXAxisData={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
        chartTitle={"DailyChart"}
        chartBackgroundColors={['rgba(53, 162, 235, 0.5)','rgba(153, 162, 235, 0.5)']}
        chartYAxisData={[[1,2,3,4,5,6,7],[7,6,5,4,3,2,1]]}
        chartYAxisLabel={["gpin up", "going udown"]}
    ></TimeBarChart>
    <TimeLineChart
        key="c2"
        chartXAxisData={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
        chartTitle={"DailyChart"}
        chartBackgroundColors={['rgba(53, 162, 235, 0.5)','rgba(153, 162, 235, 0.5)']}
        chartYAxisData={[[1,2,3,4,5,6,7],[7,6,5,4,3,2,1]]}
        chartYAxisLabel={["gpin up", "going udown"]}
    ></TimeLineChart>
    <MultiAxisLineChart
        key="c3"
        chartXAxisData={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
        chartTitle={"DailyChart"}
        chartBackgroundColors={['rgba(53, 162, 235, 0.5)','rgba(153, 162, 235, 0.5)']}
        chartYAxisData={[[1,2,3,4,5,6,7],[70,60,50,40,30,20,10]]}
        chartYAxisLabel={["gpin up", "going udown"]}
    ></MultiAxisLineChart>
    </>
}