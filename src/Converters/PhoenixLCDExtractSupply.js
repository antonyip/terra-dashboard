function PhoenixLCDExtractSupply(data) {

    const array = data.supply
    for (let index = array.length-1; index > 0 ; index--) {
        const element = array[index];
        //console.log(element);
        if (element.denom === 'uluna')
        {
            return (element.amount)
        }
    }

    return 1051017414895772
}

export default PhoenixLCDExtractSupply;