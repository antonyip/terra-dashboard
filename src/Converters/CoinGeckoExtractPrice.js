function CoinGeckoExtractPrice(data) {

    //console.log(data.market_data.current_price.usd);

    return data.market_data.current_price.usd
}

export default CoinGeckoExtractPrice;