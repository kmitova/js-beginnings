function solve(arr1, arr2) {
  let areIdentical = true

  for (let i = 0; i <= arr1.length - 1; i++) {
    arr1[i] = Number(arr1[i])
  }
  for (let i = 0; i <= arr2.length - 1; i++) {
    arr2[i] = Number(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(
        `Arrays are not identical. Found difference at ${i} index`
      );
      areIdentical = false
      break
    }
  }

  if (areIdentical) {
    let sum = 0
    for (let num of arr1) {
      sum += num
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  }

}

solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);