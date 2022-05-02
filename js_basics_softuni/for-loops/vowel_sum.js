function vowelSum(input) {
  let string = input[0];
  let sum = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let letter of string) {
    if (letter === "a") {
      sum += 1;
    } else if (letter === "e") {
      sum += 2;
    } else if (letter === "i") {
      sum += 3;
    } else if (letter === "o") {
      sum += 4;
    } else if (letter === "u") {
      sum += 5;
    }
  }

  console.log(sum);
}

vowelSum(["hello"]);
