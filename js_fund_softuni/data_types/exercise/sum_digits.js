function solve(num) {
  numStr = num.toString()
  let sum = 0
  for (let el of numStr) {
    sum += Number(el)
  }
  console.log(sum)
}

solve(543)