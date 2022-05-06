function sumOfTwoNums(input) {
  let startInt = Number(input[0]);
  let finalInt = Number(input[1]);
  let magicNum = Number(input[2]);

  let combinations = 0;
  let magicNumFound = false;

  for (let i = startInt; i < finalInt + 1; i++) {
    for (let j = startInt; j < finalInt + 1; j++) {
      combinations += 1;
      if (i + j === magicNum) {
        magicNumFound = true;
        console.log(
          `Combination N:${combinations} (${i} + ${j} = ${magicNum})`
        );
        break;
      }
    }
    if (magicNumFound) {
      break;
    }
  }

  if (!magicNumFound) {
    console.log(`${combinations} combinations - neither equals ${magicNum}`);
  }
}

sumOfTwoNums(["23", "24", "20"]);
