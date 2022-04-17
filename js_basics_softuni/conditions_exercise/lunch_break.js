function timeForTV(input) {
  let name = input[0]
  let episodeDuration = Number(input[1])
  let breakDuration = Number(input[2])

  let lunchTime = breakDuration * 1/8
  let rest = breakDuration * 1/4
  let timeRemaining = breakDuration - (lunchTime + rest)

  if (timeRemaining >= episodeDuration) {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(timeRemaining - episodeDuration)} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - timeRemaining)} more minutes.`
    );
  }
}

timeForTV(["Game of Thrones", "60", "96"]);
