function solve(nums) {
  nums = nums.sort((a, b) => b - a);
  let newArr = [];
  while (nums.length > 0) {
    let biggerNum = nums.shift();
    let smallerNum = nums.pop();
    newArr.push(biggerNum);
    newArr.push(smallerNum);
  }

  console.log(newArr.join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
