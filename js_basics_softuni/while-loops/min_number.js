function minNumber(input) {
  let minNumber = Number.MAX_VALUE;
  let data = input[0];
  let index = 1;
  while (data !== "Stop") {
    currentNum = Number(data);

    if (currentNum < minNumber) {
      minNumber = currentNum;
    }

    data = input[index];
    index++;
  }
  if (minNumber !== Number.MAX_VALUE) console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
