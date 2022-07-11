function stringLength(arr1, arr2, arr3) {
  let sumLength;
  let avgLength;

  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let arr3Length = arr3.length;

  sumLength = arr1Length + arr2Length + arr3Length;
  avgLength = Math.floor(sumLength / 3);
  console.log(sumLength);
  console.log(avgLength);
}

stringLength("chocolate", "ice cream", "cake");
