import axios from "axios";

async function TerraLatestBlock() {
    const res = await axios.get("https://phoenix-lcd.terra.dev/blocks/latest");
    return res.data;
}

export default TerraLatestBlock

