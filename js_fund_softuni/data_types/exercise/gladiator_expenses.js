function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0
  let shieldBrokenTimes = 0

  for (let fight = 1; fight <= lostFights; fight++) {
    if (fight % 2 === 0) {
      expenses += helmetPrice
    }
    if (fight % 3 === 0) {
      expenses += swordPrice
    }
    if (fight % 2 === 0 && fight % 3 === 0) {
      expenses += shieldPrice
      shieldBrokenTimes += 1
      if (shieldBrokenTimes % 2 === 0) {
        expenses += armorPrice
      }
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

expenses(7, 2, 3, 4, 5);