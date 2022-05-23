function roundingNumbers(num, round) {
  num = Number(num)
  round = Number(round)
  if (round > 15) {
    round = 15
  }
  let result = num.toFixed(round)
  console.log(parseFloat(result))
}

roundingNumbers(10.5, 3);