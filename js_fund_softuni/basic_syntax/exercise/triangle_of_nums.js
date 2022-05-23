function numberTriangle(num) {
  for (let i = 1; i <= num; i++) {
    let line = ''
    for (let j = 0; j < i; j++) {
      line += i
      if (j !== i) {
        line += " "
      }
    }
    console.log(line)
  }
}

  numberTriangle(3)