// describe - organizes tests by unit
// it/test - organizes tests by specification
// expect - actually runs a test

const getOrderTotal = require('./index')

it('should return 0 when no items are given', function () {
    const result = getOrderTotal([]);
    expect(result).toBe(0);
})

it('should calculate the total for items with quantity', function () {
    const result = getOrderTotal([
        {price: 18, quantity: 5},
        {price: 60, quantity: 1},
    ]);

    expect(result).toBe(150);
})

it('should calculate the total for items with shipping cost', function () {
    const result = getOrderTotal([
        {price: 15, quantity: 1, weight: 1},
        {price: 60, quantity: 1, weight: 10},
    ])

    expect(result).toBe(97);
})

it('should calculate the total with tax for the matching state', function () {
    const resultNY = getOrderTotal([
        {price: 18, quantity: 5},
        {price: 60, quantity: 1},
    ], 'NY');

    const resultMA = getOrderTotal([
        {price: 18, quantity: 5},
        {price: 60, quantity: 1},
    ], 'MA')

    expect(resultNY).toBe(162);
    expect(resultMA).toBe(165);
})



it('should give free shipping if the total is more than 100', function () {
    const result1 = getOrderTotal([
        {price: 18, quantity: 5, weight: 1},
        {price: 60, quantity: 1, weight: 10},
    ])

    const result2 = getOrderTotal([
        {price: 20, quantity: 5, weight: 1000}
    ])

    expect(result1).toBe(150);
    expect(result2).toBe(100);
})