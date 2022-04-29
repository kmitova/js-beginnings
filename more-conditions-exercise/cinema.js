function cinema(input) {
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let type = input[0];

  let income = 0;

  if (type === "Premiere") {
    income = 12 * rows * columns;
  } else if (type === "Normal") {
    income = 7.5 * rows * columns;
  } else if (type === "Discount") {
    income = 5 * rows * columns;
  }

  console.log(`${income.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);
