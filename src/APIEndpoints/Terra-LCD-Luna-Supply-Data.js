import axios from "axios";

async function TerraLCDSupply() {
    const res = await axios.get("https://phoenix-lcd.terra.dev/cosmos/bank/v1beta1/supply");
    return res.data;
}

export default TerraLCDSupply