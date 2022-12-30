import { useEffect, useState } from "react"
import PhoenixLCDExtractBlock from "../Converters/PhoenixLCDExtractBlock"
import PhoenixLCDExtractTime from "../Converters/PhoenixLCDExtractTime"
import CoinGeckoExtractPrice from "../Converters/CoinGeckoExtractPrice"
import { Grid } from "@mui/material"
import TerraSummary from "../APIEndpoints/Terra-Summary-Data"
import SingleDigitDisplay from "../Components/SingleDigitDisplay"
import TerraLatestBlock from "../APIEndpoints/Terra-LatestBlock-Data"

export default function SummaryPage() {

    const [TerraPriceData, setTerraPriceData] = useState(1.25);
    const [TerraLatestBlockData, setTerraLatestBlock] = useState(3098561);
    const [TerraLatestTimeData, setTerraLatestTime] = useState('2022-12-29 22:58:56');

    useEffect(() => {
        TerraSummary().then(res => setTerraPriceData(CoinGeckoExtractPrice(res)))
        TerraLatestBlock().then(res => { 
            setTerraLatestBlock(PhoenixLCDExtractBlock(res));
            setTerraLatestTime(PhoenixLCDExtractTime(res));
        })
    }, [])

    return <>
    <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    key="Luna Price"
                    chartName="Luna Price"
                    chartValue={TerraPriceData}
                    chartPreValueText="$ "
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    key="LatestBlock"
                    chartName="Terra Latest Block"
                    chartValue={TerraLatestBlockData}
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    key="LatestBlock"
                    chartName="Last Updated"
                    chartValue={TerraLatestTimeData}
                ></SingleDigitDisplay>
            </Grid>
            <div>Terra Price Chart | Blocks Count Chart | Tx Count Chart</div>
    </Grid></>
}
