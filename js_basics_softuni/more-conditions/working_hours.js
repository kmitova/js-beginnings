function timeOfDay(input) {
  let time = Number(input[0]);
  let day = input[1];

  if (day === "Sunday") {
    console.log("closed");
  } else {
    if (time >= 10 && time <= 18) {
      console.log("open");
    } else {
      console.log("closed");
    }
  }
}

timeOfDay(["11", "Sunday"]);
