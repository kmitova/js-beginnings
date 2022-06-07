function solve(nums) {
  let result = nums
    .filter((num, i) => i % 2 == 1)
    .map(x => x * 2)
    .reverse()
  return result.join(' ')

}

console.log(solve([10, 15, 20, 25]));