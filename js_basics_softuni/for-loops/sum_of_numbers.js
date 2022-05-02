function sumOfNumbers(input) {
  let string = input[0];
  let sum = 0;
  for (let symbol of string) {
    let number = Number(symbol);
    sum += number;
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);
