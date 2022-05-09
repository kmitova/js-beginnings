function journeyPlanner(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let place;
  let destination;
  let price = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      price = budget * 0.3;
      place = "Camp";
    } else {
      place = "Hotel";
      price = budget * 0.7;
    }
  } else if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      price = budget * 0.4;
      place = "Camp";
    } else {
      place = "Hotel";
      price = budget * 0.8;
    }
  } else {
    destination = "Europe";
    place = "Hotel";
    price = budget * 0.9;
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${price.toFixed(2)}`);
}

journeyPlanner(["1500", "summer"]);
