function solve(available, delivered) {
  let storedProducts = {};
  for (let index = 0; index < available.length; index += 2) {
    let currentProduct = available[index];
    storedProducts[currentProduct] = Number(available[index + 1]);
  }

  for (let index = 0; index < delivered.length; index += 2) {
    let currentProduct = delivered[index];
    if (!storedProducts.hasOwnProperty(currentProduct)) {
      storedProducts[currentProduct] = 0;
    }
    storedProducts[currentProduct] += Number(delivered[index + 1]);
  }

  for (let key of Object.keys(storedProducts)) {
    console.log(`${key} -> ${storedProducts[key]}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
