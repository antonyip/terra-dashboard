import axios from "axios";

async function TerraLCDSupplyCirculating() {
    const res = await axios.get("https://phoenix-api.terra.dev/balance/circulating-supply");
    return parseInt(res.data/1000000);
}

export default TerraLCDSupplyCirculating
