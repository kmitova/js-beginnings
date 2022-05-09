function training(input) {
  let juryMembersNum = Number(input[0]);
  let presentation = input[1];
  let index = 2;
  let avgGradePresentation = 0;
  let numberOfGrades = 0;
  let avgTotalGrade = 0;

  while (presentation !== "Finish") {
    let totalGradePerPres = 0;

    for (let member = 1; member <= juryMembersNum; member++) {
      let grade = Number(input[index]);
      index++;
      numberOfGrades += 1;
      totalGradePerPres += grade;
      avgGradePresentation = totalGradePerPres / juryMembersNum;
      avgTotalGrade += grade;
    }
    console.log(`${presentation} - ${avgGradePresentation.toFixed(2)}.`);
    presentation = input[index];
    index++;
  }
  let totalGrade = avgTotalGrade / numberOfGrades;
  console.log(`Student's final assessment is ${totalGrade.toFixed(2)}.`);
}

training([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
