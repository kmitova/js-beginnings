function solve(input) {
  let words = new Map();
  input = input.split(" ");
  for (let item of input) {
    item = item.toLowerCase();
    if (!words.has(item)) {
      words.set(item, 0);
    }
    let existing = words.get(item);
    words.set(item, (existing += 1));
  }
  let result = "";
  for (let [key, value] of words) {
    if (value % 2 !== 0) {
      result += key + " ";
    }
  }
  console.log(result);
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
