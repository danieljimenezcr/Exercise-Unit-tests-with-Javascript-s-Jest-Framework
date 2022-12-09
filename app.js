let oneEuroIs = {
    "JPY": 127.09, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(valueInEuro) {
    let EuroToDollar = valueInEuro * oneEuroIs.USD
    return EuroToDollar
}
// From Dollar to Yen
function fromDollarToYen(ValueInDollar) {
   let DollarToYen = ValueInDollar * 135.91
   return DollarToYen
}
//From Yen to Pounds
function fromYenToPound(valueInYen) {
    let YenToPound = valueInYen * 0.0060
    return YenToPound
}



module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }