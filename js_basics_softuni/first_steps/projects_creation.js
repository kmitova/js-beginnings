function hoursRequired(input) {
  let name = input[0];
  let number = Number(input[1]);
  let timeNeeded = 3 * number;
  console.log(`The architect ${name} will need ${timeNeeded} hours to complete ${number} project/s.`);
}

hoursRequired(["George ", "4 "]);