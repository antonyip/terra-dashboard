import axios from "axios";

async function TerraLCDSupplyCirculating() {
    const res = await axios.get("https://phoenix-api.terra.dev/balance/circulating-supply");
    return res.data;
}

export default TerraLCDSupplyCirculating
