function fishing(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);
  let total = 0;
  let rent = 0;

  if (season === "Spring") {
    rent = 3000;
    if (fishermen <= 6) {
      total = rent - rent * 0.1;
    } else if (fishermen > 6 && fishermen <= 11) {
      total = rent - rent * 0.15;
    } else if (fishermen >= 12) {
      total = rent - rent * 0.25;
    }
    if (fishermen % 2 === 0) {
      total -= total * 0.05;
    }
  } else if (season === "Summer") {
    rent = 4200;
    if (fishermen <= 6) {
      total = rent - rent * 0.1;
    } else if (fishermen > 6 && fishermen <= 11) {
      total = rent - rent * 0.15;
    } else if (fishermen >= 12) {
      total = rent - rent * 0.25;
    }
    if (fishermen % 2 === 0) {
      total -= total * 0.05;
    }
  } else if (season === "Autumn") {
    rent = 4200;
    if (fishermen <= 6) {
      total = rent - rent * 0.1;
    } else if (fishermen > 6 && fishermen <= 11) {
      total = rent - rent * 0.15;
    } else if (fishermen >= 12) {
      total = rent - rent * 0.25;
    }
  } else if (season === "Winter") {
    rent = 2600;
    if (fishermen <= 6) {
      total = rent - rent * 0.1;
    } else if (fishermen > 6 && fishermen <= 11) {
      total = rent - rent * 0.15;
    } else if (fishermen >= 12) {
      total = rent - rent * 0.25;
    }
    if (fishermen % 2 === 0) {
      total -= total * 0.05;
    }
  }

  if (budget - total >= 0) {
    diff = budget - total;
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    diff = total - budget;
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishing(["2000", "Winter", "13"]);
