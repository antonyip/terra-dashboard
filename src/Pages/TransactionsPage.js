import { useEffect, useState } from "react"
import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart"
import {TerraTPS, TerraTPSQuery} from "../APIEndpoints/Terra-TPS-Data"
import {TerraBlocktime, TerraBlocktimeQuery} from "../APIEndpoints/Terra-Blocktime-Data"
import {TerraFees, TerraFeesQuery} from "../APIEndpoints/Terra-Fees-Data"
import {TerraTxSuccessRate, TerraTxSuccessRateQuery} from "../APIEndpoints/Terra-Tx-Success-Data"
import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart"
import { Grid } from "@mui/material"
import { CHARTCOLORS } from "../Constants/Colors"

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

    return <>
    <div className="h2">Transactions</div>
    <Grid container spacing={2} >
        <Grid item xs={12} md={6} sx={{p:1}}>
            <MultiAxisBarLineChart
                chartDataLoad={TerraTPSData}
                chartSwapYAxis={true}
                chartTitle={"Transaction Speed"}
                chartQuery={TerraTPSQuery()}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisLabel={["Transactions Per Second", "Tx Count"]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{p:1}}>
            <MultiAxisBarLineChart
                chartDataLoad={TerraBlocktimeData}
                chartTitle={"Blockchain Speed"}
                chartQuery={TerraBlocktimeQuery()}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisLabel={["Average Blocktime", "Number of Blocks Per Week"]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{p:1}}>
        <MultiAxisBarLineChart
                chartDataLoad={TerraFeeData}
                chartSwapYAxis={true}
                chartTitle={"Protocol Earnings"}
                chartQuery={TerraFeesQuery()}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisLabel={["Average Fees Per Transaction Per Week", "Total Fees Per Week"]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={12} md={6} sx={{p:1}}>
        <MultiAxisBarLineChart
                chartDataLoad={TerraTxRateData}
                chartSwapYAxis={true}
                chartTitle={"Transaction Success Rate"}
                chartQuery={TerraTxSuccessRateQuery()}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisLabel={["Average Tx Success Rate", "Weekly Tx Success Rate"]}
            ></MultiAxisBarLineChart>
        </Grid>
    </Grid></>
}