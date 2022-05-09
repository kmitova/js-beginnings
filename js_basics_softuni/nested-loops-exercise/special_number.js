function specialNumbers(input) {
  let n = Number(input[0]);
  let printLine = "";
  for (let current = 1111; current <= 10000; current++) {
    let nIsSpecial = true;
    let currentAsString = current.toString();
    for (let currentDigit of currentAsString) {
      if (Number(currentDigit) === 0 || n % Number(currentDigit) !== 0) {
        nIsSpecial = false;
        break;
      }
    }
    if (nIsSpecial) {
      printLine += current + " ";
    }
  }
  console.log(printLine);
}

specialNumbers(["3"]);
