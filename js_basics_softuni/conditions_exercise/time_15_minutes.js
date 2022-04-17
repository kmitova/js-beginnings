function timeMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  minutes += 15;

  if (minutes >= 60) {
    hours += 1;
    minutes %= 60;
  } 

  if (hours > 23) {
    hours = 0;
  }

  if (minutes <= 9) {
    console.log(`${hours}:0${minutes}`);

  } else {
    console.log(`${hours}:${minutes}`);
  }
}

timeMinutes(["1", "46"])