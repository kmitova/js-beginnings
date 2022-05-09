function skiTripPrice(input) {
  let days = Number(input[0]) - 1;
  let roomType = input[1];
  let rating = input[2];

  let price = 0;
  let total = 0;
  let discount = 0;

  if (days < 10) {
    if (roomType === "room for one person") {
      price = days * 18;
      total = price;
    } else if (roomType === "apartment") {
      price = days * 25;
      total = price - price * 0.3;
    } else {
      price = days * 35;
      total = price - price * 0.1;
    }
  } else if (days >= 10 && days <= 15) {
    if (roomType === "room for one person") {
      price = days * 18;
      total = price;
    } else if (roomType === "apartment") {
      price = days * 25;
      total = price - price * 0.35;
    } else {
      price = days * 35;
      total = price - price * 0.15;
    }
  } else {
    if (roomType === "room for one person") {
      price = days * 18;
      total = price;
    } else if (roomType === "apartment") {
      price = days * 25;
      total = price - price * 0.5;
    } else {
      price = days * 35;
      total = price - price * 0.2;
    }
  }

  if (rating === "positive") {
    total += total * 0.25;
  } else {
    total -= total * 0.1;
  }

  console.log(`${total.toFixed(2)}`);
}

skiTripPrice(["2", "apartment", "positive"]);
