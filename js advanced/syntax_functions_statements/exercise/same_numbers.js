function solve(n) {
  n = n.toString();
  let sum = 0;
  nArray = n.split("");
  for (const el of nArray) {
    sum += Number(el);
  }

  nSet = new Set(nArray);
  if (nSet.size === 1) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(sum);
}

solve(2222222);
