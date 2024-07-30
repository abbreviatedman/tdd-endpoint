// items can have quantity and we'll have to multiply prices by quantity for each item type
// e.g., 5 shirts at $18 and 1 board game at $60, our total is $150

// for every pound, the shipping cost is increased by $2
// shipping might be free after a certain price

// domestic taxes might vary by state
// e.g.:
// NY: 8%
// MA: 10%
// NJ: 5%

// international shipments might have entirely different tax systems
const tax = {
    NY: 0.08,
    MA: 0.1,
    NJ: 0.05,
}

function getOrderTotal(items, state) {
    let salesTax = tax[state] || 0;
    let baseCost = 0;
    for (const item of items) {
        baseCost = baseCost + item.price * item.quantity;
    }

    let shippingCost = 0;
    for (const item of items) {
        shippingCost = shippingCost + item.weight * item.quantity * 2;
    }

    let total = baseCost + baseCost * salesTax;
    if (baseCost < 100) {
        total = total + shippingCost;
    }

    return total;
}

module.exports = getOrderTotal;