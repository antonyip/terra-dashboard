function PhoenixLCDExtractTime(data) {
    var stringText = data.block.header.time.toString()
    stringText = stringText.replace("T", " ")
    stringText = stringText.slice(0, stringText.indexOf('.'))
    return stringText;
}

export default PhoenixLCDExtractTime;
