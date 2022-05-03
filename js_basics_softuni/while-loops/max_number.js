function maxNumber(input) {
  let maxNumber = -Number.MAX_VALUE;
  let data = input[0];
  let index = 1;
  while (data !== "Stop") {
    currentNum = Number(data);

    if (currentNum > maxNumber) {
      maxNumber = currentNum;
    }
    
    data = input[index];
    index++;
  }
  if (maxNumber !== -Number.MAX_VALUE)
    console.log(maxNumber);
}

maxNumber(["-10", "20", "-30", "Stop"]);
