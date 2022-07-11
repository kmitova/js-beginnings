function solve(n, a, b, c, d, e) {
  let num = Number(n);
  let commands = [a, b, c, d, e];

  let result = num;

  for (let command of commands) {
    if (command === "chop") {
      result /= 2;
    } else if (command === "dice") {
      result = Math.sqrt(result);
    } else if (command === "spice") {
      result += 1;
    } else if (command === "bake") {
      result *= 3;
    } else if (command === "fillet") {
      result = result - result * 0.2;
    }
    console.log(result);
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");
