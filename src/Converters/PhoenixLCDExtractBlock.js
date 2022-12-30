import NumberWithCommas from "./NumberWithCommars";
function PhoenixLCDExtractBlock(data) {
    return NumberWithCommas(data.block.header.height);
}

export default PhoenixLCDExtractBlock;
