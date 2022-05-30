function solve(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = Number(arr[i])
  }
  let evens = 0
  let odds = 0

  for (let num of arr) {
    if (num % 2 == 0) {
      evens += num
    } else {
      odds += num
    }
  }
  console.log(evens - odds)
}

solve([1, 2, 3, 4, 5, 6]);