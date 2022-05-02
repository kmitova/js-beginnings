function divisibleBy9(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let sum = 0;
  let numbers = [];
  for (let i = num1; i <= num2; i++) {
    if (i % 9 === 0) {
      numbers.push(i);
      sum += i;
    }
  }

  console.log(`The sum: ${sum}`);

  for (let item of numbers) {
    console.log(item);
  }
}

divisibleBy9(["100", "200"]);
