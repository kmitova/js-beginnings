function movieCalculations(input) {
  let budget = Number(input[0]);
  let extrasNumber = Number(input[1]);
  let priceClothes = Number(input[2]);

  let decors = budget * 0.1;
  let clothesPrice = extrasNumber * priceClothes;

  if (extrasNumber > 150) {
    clothesPrice -= clothesPrice * 0.1;
  }

  let total = decors + clothesPrice;
  let left = budget - total;

  if (total > budget) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${Math.abs(total - budget).toFixed(2)} leva more.`
    );
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${Math.abs(budget - total).toFixed(
        2
      )} leva left.`
    );
  }
}

movieCalculations(["20000", "120", "55.5"]);
