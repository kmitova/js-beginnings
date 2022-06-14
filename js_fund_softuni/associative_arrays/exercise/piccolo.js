function solve(input) {
  let cars = {};
  for (let el of input) {
    let info = el.split(", ");
    let direction = info[0];
    let number = info[1];
    if (direction === "IN") {
      if (!cars.hasOwnProperty(number)) {
        cars[number] = 0;
      }
    } else if (direction === "OUT") {
      if (cars.hasOwnProperty(number)) {
        delete cars[number];
      }
    }
  }
  let objectLength = Object.keys(cars).length;
  if (objectLength > 0) {
    let sorted = Object.entries(cars);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key in sorted) {
      console.log(`${sorted[key][0]}`);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
