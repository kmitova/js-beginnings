function solve(input) {
  let map = new Map();
  for (let el of input) {
    if (!map.has(el)) {
      map.set(el, 0);
    }
    let existing = map.get(el);
    map.set(el, existing + 1);
  }
  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let [word, count] of sorted) {
    console.log(`${word} -> ${count} times`);
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
