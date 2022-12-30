import { useEffect, useState } from "react"
import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart"
//import TimeBarChart from "../Components/TimeBarChart"
//import TimeLineChart from "../Components/TimeLineChart"
import TerraTPS from "../APIEndpoints/Terra-TPS-Data"
import TerraBlocktime from "../APIEndpoints/Terra-Blocktime-Data"
import TerraFees from "../APIEndpoints/Terra-Fees-Data"
import TerraTxSuccessRate from "../APIEndpoints/Terra-Tx-Success-Data"
import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart"
import { Grid } from "@mui/material"
import { CHARTCOLORS } from "../Constants/Colors"
import { Spinner } from "reactstrap"


export default function TransactionsPage() {
    const [TerraBlocktimeData, setTerraBlocktimeData] = useState();
    const [TerraTPSData, setTerraTPSData] = useState();
    const [TerraFeeData, setTerraFeeData] = useState();
    const [TerraTxRateData, setTerraTxRateData] = useState();

    useEffect(() => {
        TerraTPS().then(res => setTerraTPSData(ConvertToMultiAxisBarLineChart(res, true)))
        TerraBlocktime().then(res => setTerraBlocktimeData(ConvertToMultiAxisBarLineChart(res, true)))
        TerraFees().then(res => setTerraFeeData(ConvertToMultiAxisBarLineChart(res, true)))
        TerraTxSuccessRate().then(res => setTerraTxRateData(ConvertToMultiAxisBarLineChart(res, true)))
    }, [])

    //console.log(`TerraBlocktimeData: ${JSON.stringify(TerraBlocktimeData)}`);

    if (   TerraTPSData === undefined
        || TerraBlocktimeData === undefined
        || TerraFeeData === undefined
        || TerraTxRateData === undefined
    )
    {
        return <Spinner></Spinner>
    }

    return <>
    <div className="h2">Transactions</div>
    <Grid container spacing={2} >
        <Grid item xs={12} md={6} sx={{p:1}}>
            <MultiAxisBarLineChart
                key="Transactions Per Second"
                chartXAxisData={TerraTPSData.xAxis}
                chartTitle={"Transaction Speed"}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraTPSData.yAxis2, TerraTPSData.yAxis]}
                chartYAxisLabel={["Transactions Per Second", "Tx Count"]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{p:1}}>
            <MultiAxisBarLineChart
                key="Average Blocktime"
                chartXAxisData={TerraBlocktimeData.xAxis}
                chartTitle={"Blockchain Speed"}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraBlocktimeData.yAxis, TerraBlocktimeData.yAxis2]}
                chartYAxisLabel={["Average Blocktime", "Number of Blocks Per Week", ]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{p:1}}>
        <MultiAxisBarLineChart
                key="Fees"
                chartXAxisData={TerraFeeData.xAxis}
                chartTitle={"Protocol Earnings"}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraFeeData.yAxis2, TerraFeeData.yAxis]}
                chartYAxisLabel={["Average Fees Per Transaction Per Week", "Total Fees Per Week"]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{p:1}}>
        <MultiAxisBarLineChart
                key="TxSuccess Rate"
                chartXAxisData={TerraTxRateData.xAxis}
                chartTitle={"Transaction Success Rate"}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraTxRateData.yAxis2, TerraTxRateData.yAxis]}
                chartYAxisLabel={["Average Tx Success Rate", "Weekly Tx Success Rate"]}
            ></MultiAxisBarLineChart>
        </Grid>
    </Grid></>
}