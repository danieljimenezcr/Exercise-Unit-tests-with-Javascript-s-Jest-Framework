test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("One Dollar should be 135.91 Japan Yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(5)).toBe(679.55); 
})

test("One Japan Yen should be 0.0060 Pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(700.50)).toBe(4.203); 
})
