function sumSeconds(input) {
  let firstTime = Number(input[0]);
  let secondTime = Number(input[1]);
  let thirdTime = Number(input[2]);
  let total = firstTime + secondTime + thirdTime;
  let minutes = Math.floor(total / 60);
  let seconds = total % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }

}

sumSeconds(["35", "45", "44"])