function numberPowerOfTwo(input) {
  number = Number(input[0]);

  for (let i = 0; i <= number; i += 2) {
    console.log(2 ** i);
  }
}

numberPowerOfTwo(["7"]);
