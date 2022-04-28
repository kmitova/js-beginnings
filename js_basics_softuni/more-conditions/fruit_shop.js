function priceCalculator(input) {
  let product = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  if (day === "Saturday" || day === "Sunday") {
    if (product === "banana") {
      price = 2.7 * quantity;
    } else if (product === "apple") {
      price = quantity * 1.25;
    } else if (product === "orange") {
      price = quantity * 0.9;
    } else if (product === "grapefruit") {
      price = quantity * 1.6;
    } else if (product === "kiwi") {
      price = quantity * 3;
    } else if (product === "pineapple") {
      price = quantity * 5.6;
    } else if (product === "grapes") {
      price = quantity * 4.2;
    }
  } else if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    if (product === "banana") {
      price = 2.5 * quantity;
    } else if (product === "apple") {
      price = quantity * 1.2;
    } else if (product === "orange") {
      price = quantity * 0.85;
    } else if (product === "grapefruit") {
      price = quantity * 1.45;
    } else if (product === "kiwi") {
      price = quantity * 2.7;
    } else if (product === "pineapple") {
      price = quantity * 5.5;
    } else if (product === "grapes") {
      price = quantity * 3.85;
    }
  }

  if (price > 0) {
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }
}
priceCalculator(["tomato", "Monday", "0.5"]);
