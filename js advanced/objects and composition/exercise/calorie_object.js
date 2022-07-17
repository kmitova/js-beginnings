function solve(array) {
  const result = {};
  for (let index = 0; index < array.length; index += 2) {
    const product = array[index];
    const cals = Number(array[index + 1]);
    result[product] = cals;
  }
  console.log(result);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
