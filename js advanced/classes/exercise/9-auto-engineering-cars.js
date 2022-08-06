function solve(arr) {
  const cars = {};

  for (const line of arr) {
    let [brand, model, qty] = line.split(" | ");

    if (!cars.hasOwnProperty(brand)) {
      cars[brand] = {};
    }
    if (!cars[brand].hasOwnProperty(model)) {
      cars[brand][model] = 0;
    }

    cars[brand][model] += Number(qty);
  }
  let result = "";
  for (const brand in cars) {
    result += brand + "\n";
    for (const info in cars[brand]) {
      result += `###${info} -> ${cars[brand][info]}\n`;
    }
  }

  console.log(result);
}

solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
