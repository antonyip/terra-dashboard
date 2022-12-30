import NumberWithCommas from "./NumberWithCommars";
function PhoenixLCDExtractSupply(data) {

    const array = data.supply
    for (let index = array.length-1; index > 0 ; index--) {
        const element = array[index];
        //console.log(element);
        if (element.denom === 'uluna')
        {
            return NumberWithCommas(element.amount)
        }
    }

    return '1,051,017,414,895,772'
}

export default PhoenixLCDExtractSupply;