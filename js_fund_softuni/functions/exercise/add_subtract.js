function solve(n1, n2, n3) {
  function add(firstNum, secondNum) {
    return firstNum + secondNum
  }
  let subtract = (addResult, thirdNum) => addResult - thirdNum
  let result = add(n1, n2)
  let finalResult = subtract(result, n3)
  console.log(finalResult)
}

solve(23, 6, 10)