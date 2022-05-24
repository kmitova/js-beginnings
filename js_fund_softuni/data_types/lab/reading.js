function reading(pages, pagesPerHour, days) {
  let totalTime = pages / pagesPerHour
  let hoursPerDay = totalTime / days
  console.log(hoursPerDay)
}

reading(212, 20, 2);