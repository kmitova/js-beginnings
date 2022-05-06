function travelling(input) {
  let saved = 0
  let index = 0

  while (true) {
    let destination = input[index]
    index++

    if (destination === "End") {
      break
    }
    let budget = Number(input[index])
    index++

    while (budget > saved) {
      let money = Number(input[index])
      index++
      saved += money
    } 
    if (budget <= saved) {
      console.log(`Going to ${destination}!`);
    }
    saved = 0
  }
}

travelling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
