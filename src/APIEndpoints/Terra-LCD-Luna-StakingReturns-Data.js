import axios from "axios";

async function TerraLCDStakingReturns() {
    const res = await axios.get("https://phoenix-api.terra.dev/chart/staking-return/annualized");
    return res.data;
}

export default TerraLCDStakingReturns