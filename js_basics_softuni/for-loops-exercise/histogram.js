function histrogram(input) {
  let countOfNumbers = Number(input[0])
  let p1 = 0
  let p2 = 0
  let p3 = 0
  let p4 = 0
  let p5 = 0

  for (let i = 0; i < countOfNumbers; i++ ) {
    let currentNumber = Number(input[i+1]) 

    if (currentNumber < 200) {
      p1 += 1
    } else if (currentNumber < 400) {
      p2 += 1
    } else if (currentNumber < 600) {
      p3 += 1
    } else if (currentNumber < 800) {
      p4 += 1
    } else {
      p5 += 1
    }
  }

  console.log(`${(p1/countOfNumbers * 100).toFixed(2)}%`)
  console.log(`${((p2 / countOfNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p3 / countOfNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p4 / countOfNumbers) * 100).toFixed(2)}%`);
  console.log(`${((p5 / countOfNumbers) * 100).toFixed(2)}%`);
}

histrogram(["3", "1", "2", "999"]);
