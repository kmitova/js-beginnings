function combinationsChecker(input) {
  let n = Number(input[0]);
  let combinations = 0;

  for (let x1 = 0; x1 <= n + 1; x1++) {
    for (let x2 = 0; x2 <= n + 1; x2++) {
      for (let x3 = 0; x3 <= n + 1; x3++) {
        if (x1 + x2 + x3 === n) {
          combinations += 1;
        }
      }
    }
  }
  console.log(combinations);
}

combinationsChecker(["25"]);
