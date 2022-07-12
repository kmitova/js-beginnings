function solve(nums) {
  let result = [];
  let biggest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (currNum >= biggest) {
      result.push(currNum);
      biggest = currNum;
    }
  }
  return result;
}
