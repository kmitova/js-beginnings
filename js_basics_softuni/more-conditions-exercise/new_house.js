function flowerBudget(input) {
  let flower = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);
  let total = 0;

  if (flower === "Roses") {
    total = 5 * quantity;
    if (quantity > 80) {
      total -= total * 0.1;
    }
  } else if (flower === "Dahlias") {
    total = quantity * 3.8;
    if (quantity > 90) {
      total -= total * 0.15;
    }
  } else if (flower === "Tulips") {
    total = quantity * 2.8;
    if (quantity > 80) {
      total -= total * 0.15;
    }
  } else if (flower === "Narcissus") {
    total = quantity * 3;
    if (quantity < 120) {
      total += total * 0.15;
    }
  } else if (flower === "Gladiolus") {
    total = quantity * 2.5;
    if (quantity < 80) {
      total += total * 0.2;
    }
  }

  if (budget >= total) {
    let diff = budget - total;
    console.log(
      `Hey, you have a great garden with ${quantity} ${flower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    diff = total - budget;
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

flowerBudget(["Narcissus", "119", "360"]);
