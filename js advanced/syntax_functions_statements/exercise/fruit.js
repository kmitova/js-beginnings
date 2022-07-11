function solve(product, weightGrams, priceKg) {
  let weight = weightGrams / 1000;
  let price = weight * priceKg;

  console.log(
    `I need $${price.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${product}.`
  );
}

solve("orange", 2500, 1.8);
