function examPrep(input) {
  let failedThreshold = Number(input[0]);
  let index = 1;
  let solved = 0;
  let fails = 0;
  let grades = 0;
  let lastProblem;
  let hasFailed = true;

  while (fails < failedThreshold) {
    let name = input[index];
    index++;
    if (name === "Enough") {
      hasFailed = false;
      break;
    }
    let grade = Number(input[index]);
    if (grade <= 4) {
      fails += 1;
    }
    solved += 1;
    grades += grade;
    lastProblem = name;
    index++;
  }

  if (hasFailed) {
    console.log(`You need a break, ${fails} poor grades.`);
  } else {
    avg = grades / solved;
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${solved}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}

examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
