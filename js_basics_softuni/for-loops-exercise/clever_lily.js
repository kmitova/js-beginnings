function moneyCalc(input) {
  let age = Number(input[0]);
  let moneyNeeded = Number(input[1]);
  let toyPrice = Number(input[2]);

  let moneySaved = 0;

  for (let birthday = 1; birthday < age + 1; birthday++) {
    if (birthday % 2 === 0) {
      moneySaved += (birthday * 10) / 2 - 1;
    } else {
      moneySaved += toyPrice;
    }
  }

  if (moneySaved >= moneyNeeded) {
    console.log(`Yes! ${(moneySaved - moneyNeeded).toFixed(2)}`);
  } else {
    console.log(`No! ${(moneyNeeded - moneySaved).toFixed(2)}`);
  }
}

moneyCalc(["10", "170.00", "6"]);
