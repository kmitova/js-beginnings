function vacationFinance(input) {
  let neededMoney = Number(input[0]);
  let availableMoney = Number(input[1]);
  let days = 0;
  let spendingDays = 0;

  let index = 2;

  while (availableMoney < neededMoney && spendingDays < 5) {
    let action = input[index];
    index++;
    let sumToUse = Number(input[index]);
    index++;
    days += 1;

    if (action === "spend") {
      availableMoney -= sumToUse;
      spendingDays += 1;
      if (availableMoney < 0) {
        availableMoney = 0;
      }
    } else if (action === "save") {
      availableMoney += sumToUse;
      spendingDays = 0;
    }
  }

  if (spendingDays === 5) {
    console.log("You can't save the money.");
    console.log(days);
  }

  if (availableMoney >= neededMoney) {
    console.log(`You saved the money for ${days} days.`);
  }
}

vacationFinance(["2000", "1000", "spend", "1200", "save", "2000"]);
