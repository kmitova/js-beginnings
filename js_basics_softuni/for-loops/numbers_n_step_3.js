function numbersStep3(input) {
  number = Number(input[0]);

  for (let i = 1; i <= number; i += 3) {
    console.log(i);
  }
}

numbersStep3(["10"]);
