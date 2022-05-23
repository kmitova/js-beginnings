function printSum(n1, n2) {
  let sum = 0
  let printLine = ''
  for (let i = n1; i <= n2; i++) {
    printLine += i + ' '
    sum += i
  }
  console.log(printLine)
  console.log(`Sum: ${sum}`)
}

printSum(50, 60)