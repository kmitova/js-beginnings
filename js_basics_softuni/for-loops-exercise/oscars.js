function oscasPoints(input) {
  let name = input[0];
  let totalPoints = Number(input[1]);
  let juryNumber = Number(input[2]);
  let juryMemberName;
  let currentPoints = 0;
  for (let curentGrade = 0; curentGrade < juryNumber; curentGrade++) {
    if (curentGrade === 0) {
      juryMemberName = input[3];
      currentPoints = Number(input[4]);
    } else {
      juryMemberName = input[3 + curentGrade * 2];
      currentPoints = Number(input[4 + curentGrade * 2]);
    }

    let currentFinalPoints = (juryMemberName.length * currentPoints) / 2;
    totalPoints += currentFinalPoints;

    if (totalPoints > 1250.5) {
      break;
    }
  }

  if (totalPoints > 1250.5) {
    console.log(
      `Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(
        1
      )}!`
    );
  } else {
    diff = 1250.5 - totalPoints;
    console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
  }
}

oscasPoints([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
