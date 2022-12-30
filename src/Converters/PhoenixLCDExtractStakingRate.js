function PhoenixLCDExtractStakingRate(data) {

    return `${Math.round(parseFloat(data[0].value)*100000)/1000}%`
}

export default PhoenixLCDExtractStakingRate;