function solve(input) {
  let firstD = 0;
  let secondD = 0;
  let firstIndex = 0;
  let secondIndex = input[0].length - 1;

  input.forEach((array) => {
    firstD += array[firstIndex++];
    secondD += array[secondIndex--];
  });

  console.log(firstD + " " + secondD);
}

solve([
  [20, 40],
  [10, 60],
]);
