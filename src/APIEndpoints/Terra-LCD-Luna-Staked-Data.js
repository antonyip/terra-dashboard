import axios from "axios";

async function TerraLCDStaked() {
    const res = await axios.get("https://phoenix-lcd.terra.dev/cosmos/staking/v1beta1/pool");
    return res.data;
}

export default TerraLCDStaked