function solve(arr) {
  let res = 0;
  let first = arr.shift();
  let second = arr.pop();
  res = Number(first) + Number(second);
  console.log(res);
}

solve(["20", "30", "40"]);
