function solve(strings) {
  let result = [];
  for (const el of strings) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    result.push({ name, level, items });
  }
  console.log(JSON.stringify(result));
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
