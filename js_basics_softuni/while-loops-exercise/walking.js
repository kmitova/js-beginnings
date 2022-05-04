function stepsCounter(input) {
  let goal = 10000;
  let total = 0;
  let index = 0;
  while (total < goal) {
    let command = input[index];
    index++;

    if (command === "Going home") {
      let stepsToHome = Number(input[index]);
      total += stepsToHome;
      break;
    }

    let currentSteps = Number(command);
    total += currentSteps;
  }
  let diff = Math.abs(total - goal);
  if (total >= goal) {
    console.log("Goal reached! Good job!");
    console.log(`${Math.abs(diff)} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}

stepsCounter(["1000", "1500", "2000", "6500"]);
