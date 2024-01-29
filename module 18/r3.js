// Filtering array element 
const purchaseHistory = [100, 250, 140, 340, 49, 310, 299, 255];
const filteredPurchaseHistory = [];

for (let i = 0; i < purchaseHistory.length; i++) {
    const current = purchaseHistory[i];
    if (current > 200) {
        filteredPurchaseHistory.push(current);
    }
}
console.log("purchase history: ", purchaseHistory);
console.log("Filtered purchase history: ", filteredPurchaseHistory);

// using a function filtering 

const filteredPurchaseHistory2 = purchaseHistory.filter(function (current) {
    return current > 200;
}
)

console.log("The filter function gives: ", filteredPurchaseHistory2);


// discount updating 
// Filtering array element 
const purchaseHistory3 = [100, 250, 140, 340, 49, 310, 299, 255];
const discountPrices = [];

for (let i = 0; i < purchaseHistory3.length; i++) {
    const current = purchaseHistory3[i];
    if (current > 200) {
        const calculatedDiscount = current - current * 10 / 100;
        discountPrices.push(calculatedDiscount);
    }
    else {
        discountPrices.push(current);
    }
}
console.log("purchase history: ", purchaseHistory3);
console.log("Discount prices : ", discountPrices);


// using map funciton 
const discountPricesUsingMap = purchaseHistory3.map(function (current) {
    if (current > 200){
        const calculatedDiscount = current - current * 5 / 100;
    return calculatedDiscount;
    }
    else{
        return current;
    }
})
console.log("Using map discount prices: ", discountPricesUsingMap);
