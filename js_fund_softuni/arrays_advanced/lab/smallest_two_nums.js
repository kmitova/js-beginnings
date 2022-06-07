function solve(nums) {
  nums.sort((a, b) => a - b);
  let result = nums.slice(0, 2);
  console.log(result.join(" "));
}

solve([30, 15, 50, 5]);
