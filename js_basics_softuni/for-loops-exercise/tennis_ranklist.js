function tennnisRanking(input) {
  let tournamentsNumber = Number(input[0]);
  let totalPoints = Number(input[1]);
  let pointsWon = 0;
  let percentWon = 0;
  let tournamentsWon = 0;

  for (let tournament = 0; tournament < tournamentsNumber; tournament++) {
    let levelReached = input[2 + tournament];

    if (levelReached === "W") {
      pointsWon += 2000;
      totalPoints += 2000;
      tournamentsWon += 1;
      percentWon = (tournamentsWon / tournamentsNumber) * 100;
    } else if (levelReached === "F") {
      pointsWon += 1200;
      totalPoints += 1200;
    } else if (levelReached === "SF") {
      pointsWon += 720;
      totalPoints += 720;
    }
  }

  let avgPoints = pointsWon / tournamentsNumber;

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor(avgPoints)}`);
  console.log(`${percentWon.toFixed(2)}%`);
}

tennnisRanking(["4", "750", "SF", "W", "SF", "W"]);
