function toyShop(input) {
  let puzzlePrice = 2.6;
  let dollPrice = 3;
  let bearPrice = 4.1;
  let minionPrice = 8.2;
  let truckPrice = 2;

  let tripPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let orderEarnings =
    puzzles * puzzlePrice +
    dollPrice * dolls +
    bearPrice * bears +
    minionPrice * minions +
    truckPrice * trucks;

  let toys = puzzles + dolls + bears + minions + trucks;

  if (toys >= 50) {
    orderEarnings -= orderEarnings * 0.25;
  }

  let rent = orderEarnings * 0.1;
  let income = orderEarnings - rent;
  let moneyLeft = income - tripPrice;

  if (moneyLeft >= 0) {
    console.log(`Yes! ${(income - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - income).toFixed(2)} lv needed.`
    );
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
