function PhoenixLCDExtractStakingRate(data) {

    return `${Math.round(parseFloat(data[data.length-1].value)*100000)/1000}%`
}

export default PhoenixLCDExtractStakingRate;