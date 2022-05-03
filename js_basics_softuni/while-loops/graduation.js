function graduationCheck(input) {
  let name = input[0];
  let fails = 0;
  let year = 1;
  let isExpelled = false;
  let grades = 0;
  let index = 1;
  while (year <= 12) {
    currentGrade = Number(input[index]);
    index++;

    if (currentGrade < 4) {
      fails += 1;

      if (fails === 2) {
        isExpelled = true;
        break;
      }
      continue;
    }

    grades += currentGrade;
    year += 1;
  }

  if (isExpelled) {
    console.log(`${name} has been excluded at ${year} grade`);
  } else {
    let avgGrade = grades / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
  }
}

graduationCheck(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
