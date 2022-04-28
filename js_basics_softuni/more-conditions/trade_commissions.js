function commissionsCalculator(input) {
  let town = input[0];
  let quantity = Number(input[1]);
  let commission = 0;

  switch (town) {
    case "Sofia":
      if (quantity >= 0 && quantity <= 500) {
        commission = 0.05;
      } else if (quantity > 500 && quantity <= 1000) {
        commission = 0.07;
      } else if (quantity > 1000 && quantity <= 10000) {
        commission = 0.08;
      } else if (quantity > 10000) {
        commission = 0.12;
      } else {
        console.log("error");
      }
      break;

    case "Varna":
      if (quantity >= 0 && quantity <= 500) {
        commission = 0.045;
      } else if (quantity > 500 && quantity <= 1000) {
        commission = 0.075;
      } else if (quantity > 1000 && quantity <= 10000) {
        commission = 0.1;
      } else if (quantity > 10000) {
        commission = 0.13;
      } else {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (quantity >= 0 && quantity <= 500) {
        commission = 0.055;
      } else if (quantity > 500 && quantity <= 1000) {
        commission = 0.08;
      } else if (quantity > 1000 && quantity <= 10000) {
        commission = 0.12;
      } else if (quantity > 10000) {
        commission = 0.145;
      } else {
        console.log("error");
      }
      break;

    default:
      console.log("error");
  }

  if (commission > 0) {
    console.log((commission * quantity).toFixed(2));
  }
}

commissionsCalculator(["Varna", "500"]);
