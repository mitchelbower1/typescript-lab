"use strict";
let mountains = [
    { name: "kilimanjaro", height: 19341 },
    {
        name: "everest",
        height: 29029
    },
    { name: "denali", height: 20310 }
];
let findNameOfTallestMountain = (arrayOfMountains) => {
    let tallestMountainHeight = 0;
    let nameOfTallestMountain = "";
    arrayOfMountains.forEach(mountain => {
        if (mountain.height > tallestMountainHeight) {
            tallestMountainHeight = mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    });
    return nameOfTallestMountain;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    { name: "red bull", price: 3 },
    { name: "pizza", price: 6 },
    { name: "fabrege brooch", price: 85000 }
];
const calcAverageProductPrice = (arrayOfProducts) => {
    let totalPrice = 0;
    arrayOfProducts.forEach(product => {
        totalPrice += product.price;
    });
    return totalPrice / products.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
const calcInvetoryValue = (arrayOfInventoryItems) => {
    let totalValue = 0;
    arrayOfInventoryItems.forEach(InventoryItem => {
        totalValue += InventoryItem.product.price * InventoryItem.quantity;
    });
    return totalValue;
};
console.log(calcInvetoryValue(inventory));
