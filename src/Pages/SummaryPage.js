import { useEffect, useState } from "react";
import PhoenixLCDExtractBlock from "../Converters/PhoenixLCDExtractBlock";
import PhoenixLCDExtractTime from "../Converters/PhoenixLCDExtractTime";
import CoinGeckoExtractPrice from "../Converters/CoinGeckoExtractPrice";
import PhoenixLCDExtractSupply from "../Converters/PhoenixLCDExtractSupply";
import { Grid } from "@mui/material";
import TerraSummary from "../APIEndpoints/Terra-Summary-Data";
import SingleDigitDisplay from "../Components/SingleDigitDisplay";
import TerraLatestBlock from "../APIEndpoints/Terra-LatestBlock-Data";
import TerraLCDSupply from "../APIEndpoints/Terra-LCD-Luna-Supply-Data";
import NumberWithCommas from "../Converters/NumberWithCommars";
import TerraLCDStakingReturns from "../APIEndpoints/Terra-LCD-Luna-StakingReturns-Data";
import PhoenixLCDExtractStakingRate from "../Converters/PhoenixLCDExtractStakingRate";
import TerraLCDSupplyCirculating from "../APIEndpoints/Terra-LCD-Luna-SupplyCirculating-Data";
import TerraLCDStaked from "../APIEndpoints/Terra-LCD-Luna-Staked-Data";

export default function SummaryPage() {
  const [TerraPriceData, setTerraPriceData] = useState(1.25);
  const [TerraLatestBlockData, setTerraLatestBlock] = useState(
    NumberWithCommas(3098561)
  );
  const [TerraLatestTimeData, setTerraLatestTime] = useState(
    "2022-12-29 22:58:56"
  );
  const [TerraLunaSupplyData, setTerraLunaSupplyData] =
    useState(1051017414);
  const [TerraLunaSupplyCirculatingData, setTerraLunaSupplyCirculatingData] =
    useState(187324501);
  const [TerraLunaStakingRateData, setTerraLunaStakingRateData] =
    useState("10.634%");
  const [TerraLunaStakedData, setTerraLunaStakedData] =
    useState(522556056);

  useEffect(() => {
    TerraSummary().then((res) => setTerraPriceData(CoinGeckoExtractPrice(res)));
    TerraLatestBlock().then((res) => {
      setTerraLatestBlock(PhoenixLCDExtractBlock(res));
      setTerraLatestTime(PhoenixLCDExtractTime(res));
    });
    TerraLCDSupply().then((res) =>
      setTerraLunaSupplyData(PhoenixLCDExtractSupply(res))
    );
    TerraLCDSupplyCirculating().then((res) =>
      setTerraLunaSupplyCirculatingData(res)
    );
    TerraLCDStakingReturns().then((res) =>
      setTerraLunaStakingRateData(PhoenixLCDExtractStakingRate(res))
    );
    TerraLCDStaked().then((res) => {
      setTerraLunaStakedData(res.pool.bonded_tokens/1000000);
    });
  }, []);

  return (
    <>
      <div className="h2">Summary</div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Price"
            chartValue={TerraPriceData}
            chartPreValueText="$ "
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Terra Latest Block"
            chartValue={TerraLatestBlockData}
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Last Updated"
            chartValue={TerraLatestTimeData}
          ></SingleDigitDisplay>
        </Grid>

        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Total Supply"
            chartValue={NumberWithCommas(Math.round(TerraLunaSupplyData))}
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={6} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Circulating Supply"
            chartValue={NumberWithCommas(Math.round(TerraLunaSupplyCirculatingData))}
          ></SingleDigitDisplay>
        </Grid>

        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Staked"
            chartValue={NumberWithCommas(Math.round(TerraLunaStakedData))}
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Staking APY"
            chartValue={TerraLunaStakingRateData}
          ></SingleDigitDisplay>
        </Grid>
        <Grid item xs={12} md={4} sx={{ p: 1 }}>
          <SingleDigitDisplay
            chartName="Luna Staked Ratio"
            chartValue={
              Math.round((TerraLunaStakedData / TerraLunaSupplyData) * 100000) /
              1000 + "%"
            }
          ></SingleDigitDisplay>
        </Grid>
      </Grid>
    </>
  );
}
