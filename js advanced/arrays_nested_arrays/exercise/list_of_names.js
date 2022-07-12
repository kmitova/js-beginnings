function solve(names) {
  names.sort((a, b) => a.localeCompare(b));
  let i = 1;
  for (const name of names) {
    console.log(`${i}.${name}`);
    i++;
  }
}

solve(["John", "Bob", "Christina", "Ema"]);
