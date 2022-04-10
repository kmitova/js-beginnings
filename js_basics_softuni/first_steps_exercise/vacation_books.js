function readingTime(input) {
  let pages = Number(input[0]);
  let pagesPerHour = Number([input[1]]);
  let days = Number(input[2]);
  let totalTimeBook = pages / pagesPerHour;
  let hoursPerDay = totalTimeBook / days;
  console.log(hoursPerDay);
}

readingTime(["212 ", "20 ", "2 "]);
