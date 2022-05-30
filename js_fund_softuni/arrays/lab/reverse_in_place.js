function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let oldEl = arr[i]
    let previousIndex = arr.length -1 - i
    arr[i] = arr[previousIndex]
    arr[previousIndex] = oldEl
  }
  console.log(arr.join(' '))
}

reverse(["a", "b", "c", "d", "e"]);