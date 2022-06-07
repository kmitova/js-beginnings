function solve(nums) {
  let resultArr = []
  for (let el of nums) {
    if (el < 0) {
      resultArr.unshift(el)
    } else {
      resultArr.push(el)
    }
  }
  console.log(resultArr.join('\n'))
}

solve(["7", "-2", "8", "9"]);
