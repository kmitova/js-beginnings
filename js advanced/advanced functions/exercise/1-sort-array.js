function solve(list, command) {
  if (command == "asc") {
    list = list.sort((a, b) => a - b);
  } else if (command == "desc") {
    list = list.sort((a, b) => b - a);
  }
  return list;
}

solve([14, 7, 17, 6, 8], "asc");
solve([14, 7, 17, 6, 8], "desc");
