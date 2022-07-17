function solve(input) {
  result = {};
  for (const el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);
    if (result.hasOwnProperty(product)) {
      if (result[product][0] > price) {
        result[product] = [price, town];
      }
    } else {
      result[product] = [price, town];
    }
  }

  for (const [key, value] of Object.entries(result)) {
    console.log(`${key} -> ${value[0]} (${value[1]})`);
  }
}

solve([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
