import { useEffect, useState } from "react"
import MultiAxisBarLineChart from "../Components/MultiAxisBarLineChart"
import ConvertToMultiAxisBarLineChart from "../Converters/ConvertToMultiAxisBarLineChart"
import { Grid } from "@mui/material"
import { CHARTCOLORS } from "../Constants/Colors"
import { Spinner } from "reactstrap"
import TerraContracts from "../APIEndpoints/Terra-Contracts-Data";
import SourceButton from "../Components/SourceButton"

export default function DevelopmentPage() {
    const [TerraContractsData, setTerraContractsData] = useState();

    useEffect(() => {
        TerraContracts().then(res => setTerraContractsData(ConvertToMultiAxisBarLineChart(res, true)))
    }, [])

    if (   TerraContractsData === undefined
    )
    {
        return <Spinner></Spinner>
    }

    //console.log(TerraContractsData)

    return <>
    <div className="h2">Contracts</div>
    <Grid container spacing={2}>
        <Grid item xs={0} md={2} sx={{p:1}}></Grid>
        <Grid item xs={12} md={8} sx={{p:1}}>
            <MultiAxisBarLineChart
                key="Contracts Generation On Terra"
                chartXAxisData={TerraContractsData.xAxis}
                chartTitle={"Contracts Generation On Terra"}
                chartBackgroundColors={[CHARTCOLORS.SECONDARY, CHARTCOLORS.PRIMARYLIGHT]}
                chartYAxisData={[TerraContractsData.yAxis2, TerraContractsData.yAxis]}
                chartYAxisLabel={["Total Number Of Contracts", "Weekly New Contracts"]}
            ></MultiAxisBarLineChart>
        </Grid>
        <Grid item xs={0} md={2} sx={{p:1}}></Grid>
    </Grid></>
}