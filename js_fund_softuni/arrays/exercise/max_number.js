function solve(arr) {
  let maxValues = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let isMaxValue = true;
    for (let j = i + 1; j < arr.length; j++) {
      let nextEl = arr[j];
      if (currentNum <= nextEl) {
        isMaxValue = false;
        break;
      }
    }
    if (isMaxValue) {
      maxValues.push(currentNum);
    }
  }
  console.log(maxValues.join(" "));
}

solve([14, 24, 3, 19, 15, 17]);
solve([1, 4, 3 ,2]);
