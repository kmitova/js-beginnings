function solve(nums) {
  const result = [];

  for (let index = 0; index < nums.length; index++) {
    if (index % 2 !== 0) {
      result.push(nums[index] * 2);
    }
  }
  result.reverse();
  return result.join(" ");
}

console.log(solve([10, 15, 20, 25]));
