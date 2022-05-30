function solve(arr) {
  let originalSum = 0
  for (let el of arr) {
    originalSum += el
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] += i
    } else {
      arr[i] -= i;
    }
  }
  let newSum = 0
    for (let el of arr) {
      newSum += el;
    }
  console.log(arr)
  console.log(originalSum)
  console.log(newSum)
}

solve([5, 15, 23, 56, 35]);