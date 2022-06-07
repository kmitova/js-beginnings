function solve(nums) {
  let uniqueNums = [...new Set(nums)]
  console.log(uniqueNums.join(' '))
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);