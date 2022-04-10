function calculateSum(input) {
  let depositedSum = Number(input[0]);
  let duration = Number(input[1]);
  let interestPercent = Number(input[2]);
  let interest = depositedSum * (interestPercent / 100);
  let interestMonth = interest / 12;
  let sum = depositedSum + duration * interestMonth;
  console.log(sum);
}

calculateSum(["200 ","3 ", "5.7 "]);
