function solve() {
  const args = Array.from(arguments);
  const types = {};
  for (const arg of args) {
    const type = typeof arg;
    console.log(`${typeof arg}: ${arg}`);
    if (types[type] == undefined) {
      types[type] = 0;
    }
    types[type]++;
  }
  const result = Object.entries(types).sort((a, b) => b[1] - a[1]);
  for (const [key, value] of result) {
    console.log(`${key} = ${value}`);
  }
}

solve({ name: "bob" }, 3.333, 9.999);
