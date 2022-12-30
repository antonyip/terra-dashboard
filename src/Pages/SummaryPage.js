import { useEffect, useState } from "react"
import PhoenixLCDExtractBlock from "../Converters/PhoenixLCDExtractBlock"
import PhoenixLCDExtractTime from "../Converters/PhoenixLCDExtractTime"
import CoinGeckoExtractPrice from "../Converters/CoinGeckoExtractPrice"
import PhoenixLCDExtractSupply from "../Converters/PhoenixLCDExtractSupply"
import { Grid } from "@mui/material"
import TerraSummary from "../APIEndpoints/Terra-Summary-Data"
import SingleDigitDisplay from "../Components/SingleDigitDisplay"
import TerraLatestBlock from "../APIEndpoints/Terra-LatestBlock-Data"
import TerraLCDSupply from "../APIEndpoints/Terra-LCD-Luna-Supply-Data"
import NumberWithCommas from "../Converters/NumberWithCommars"
import TerraLCDStakingReturns from "../APIEndpoints/Terra-LCD-Luna-StakingReturns-Data"
import PhoenixLCDExtractStakingRate from "../Converters/PhoenixLCDExtractStakingRate"
import TerraLCDSupplyCirculating from "../APIEndpoints/Terra-LCD-Luna-SupplyCirculating-Data"
export default function SummaryPage() {

    const [TerraPriceData, setTerraPriceData] = useState(1.25);
    const [TerraLatestBlockData, setTerraLatestBlock] = useState(NumberWithCommas(3098561));
    const [TerraLatestTimeData, setTerraLatestTime] = useState('2022-12-29 22:58:56');
    const [TerraLunaSupplyData, setTerraLunaSupplyData] = useState('1,051,017,414,895,772');
    const [TerraLunaSupplyCirculatingData, setTerraLunaSupplyCirculatingData] = useState(NumberWithCommas(187324501264677));
    const [TerraLunaStakingRateData, setTerraLunaStakingRateData] = useState('10.634%');


    useEffect(() => {
        TerraSummary().then(res => setTerraPriceData(CoinGeckoExtractPrice(res)))
        TerraLatestBlock().then(res => { 
            setTerraLatestBlock(PhoenixLCDExtractBlock(res));
            setTerraLatestTime(PhoenixLCDExtractTime(res));
        })
        TerraLCDSupply().then(res => setTerraLunaSupplyData(PhoenixLCDExtractSupply(res)))
        TerraLCDSupplyCirculating().then(res => setTerraLunaSupplyCirculatingData(NumberWithCommas(res)))
        TerraLCDStakingReturns().then(res => setTerraLunaStakingRateData(PhoenixLCDExtractStakingRate(res)))
    }, [])

    return <>
    <div className="h2">Summary</div>
    <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    chartName="Luna Price"
                    chartValue={TerraPriceData}
                    chartPreValueText="$ "
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    chartName="Terra Latest Block"
                    chartValue={TerraLatestBlockData}
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    chartName="Last Updated"
                    chartValue={TerraLatestTimeData}
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    chartName="Luna Total Supply"
                    chartValue={TerraLunaSupplyData}
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    chartName="Luna Circulating Supply"
                    chartValue={TerraLunaSupplyCirculatingData}
                ></SingleDigitDisplay>
            </Grid>
            <Grid item xs={12} md={4} sx={{p:1}}>
                <SingleDigitDisplay
                    chartName="Luna Staking APY"
                    chartValue={TerraLunaStakingRateData}
                ></SingleDigitDisplay>
            </Grid>
    </Grid></>
}
