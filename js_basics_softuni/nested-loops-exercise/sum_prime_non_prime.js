function primeSum(input) {
  let sumPrimeNums = 0
  let sumNonPrimeNums = 0
  let command = input[0]
  let index = 1

  while (command !== "stop") {
    let currentNum = Number(command)
    if (currentNum < 0) {
      console.log("Number is negative.");
    } else {
      let numIsPrime = true
      for (let num = 2; num < currentNum; num++) {
        if (currentNum % num === 0) {
          numIsPrime = false
        break
        }
        
      }
      if (numIsPrime) {
        sumPrimeNums += currentNum
      } else {
        sumNonPrimeNums += currentNum
      }
    }
    
    command = input[index]
    index++
  }

  console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}

primeSum(["30", "83", "33", "-1", "20", "stop"]);

