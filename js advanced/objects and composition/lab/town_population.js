function solve(list) {
  const result = {};

  for (const el of list) {
    const tokens = el.split(" <-> ");
    const town = tokens[0];
    const population = Number(tokens[1]);
    if (result[town] == undefined) {
      result[town] = population;
    } else {
      result[town] += population;
    }
  }
  for (const name in result) {
    console.log(`${name} : ${result[name]}`);
  }
}

solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
