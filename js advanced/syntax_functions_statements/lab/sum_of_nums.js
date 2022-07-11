function solve(n, m) {
  let result = 0;
  let n1 = Number(n);
  let n2 = Number(m);
  for (let i = n1; i <= n2; i++) {
    result += i;
  }
  return result;
}

console.log(solve("1", "5"));
solve("-8", "20");
