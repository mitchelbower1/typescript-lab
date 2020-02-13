interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "kilimanjaro", height: 19341 },
  {
    name: "everest",
    height: 29029
  },
  { name: "denali", height: 20310 }
];

let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallestMountainHeight) {
      tallestMountainHeight = mountain.height;
      nameOfTallestMountain = mountain.name;
    }
  });
  return nameOfTallestMountain;
};

console.log(findNameOfTallestMountain(mountains));

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "red bull", price: 3 },
  { name: "pizza", price: 6 },
  { name: "fabrege brooch", price: 85000 }
];

const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let totalPrice = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });
  return totalPrice / products.length;
};

console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

const calcInvetoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let totalValue = 0;
  arrayOfInventoryItems.forEach(InventoryItem => {
    totalValue += InventoryItem.product.price * InventoryItem.quantity;
  });
  return totalValue;
};

console.log(calcInvetoryValue(inventory));
