function solve(nums) {
  const result = [];
  nums.sort((a, b) => b - a);
  while (nums.length !== 0) {
    result.push(nums.pop());
    result.push(nums.shift());
  }

  return result;
}
