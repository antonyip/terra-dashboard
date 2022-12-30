function GenerateCSVData(rawData) {
    // var returnString = ""

    // // titles
    // returnString += xAxisLabel
    // returnString += ','
    // for (let indexY = 0; indexY < yAxisLabel.length; indexY++) {
    //     const elementY = yAxisArray[indexY];
    //     if (indexY !== 0) { returnString += ',' }
    //     returnString += elementY
        
    // }
    // returnString += '\n'

    // // data
    // for (let indexX = 0; indexX < xAxis.length; indexX++) {
    //     const elementX = xAxis[indexX];
    //     returnString += elementX
    //     for (let indexY = 0; indexY < yAxisArray.length; indexY++) {
    //         const elementY = yAxisArray[indexY];
    //         returnString += elementX
    //         if (indexY !== 0) { returnString += ',' }
    //         returnString += elementY
    //     }
    //     returnString += '\n'
    // }
    // return returnString;
    return JSON.stringify(rawData);
};

export default GenerateCSVData;