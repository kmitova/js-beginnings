function numbersSum(input) {
  let num1 = Number(input[0]);
  let index = 1;

  let sum = 0;
  let data = 0;
  while (sum < num1) {
    data = Number(input[index]);
    index++;
    sum += data;
  }
  console.log(sum);
}

numbersSum(["100", "10", "20", "30", "40"]);
