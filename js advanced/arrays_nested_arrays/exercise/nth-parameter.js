function solve(strings, num) {
  const result = [];
  for (let index = 0; index < strings.length; index += num) {
    result.push(strings[index]);
  }
  return result;
}

solve(["1", "2", "3", "4", "5"], 6);
