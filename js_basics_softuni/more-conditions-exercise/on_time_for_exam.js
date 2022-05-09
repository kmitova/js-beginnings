function examTime(input) {
  let examStart = Number(input[0]);
  let examMinStart = Number(input[1]);
  let arrHourTime = Number(input[2]);
  let arrMinTime = Number(input[3]);

  let examTimeInMin = examStart * 60 + examMinStart;
  let arrTimeMin = arrHourTime * 60 + arrMinTime;
  let diff = Math.abs(examTimeInMin - arrTimeMin);
  let hours = Math.floor(diff / 60);
  let minutes = diff % 60;

  if (examTimeInMin === arrTimeMin) {
    console.log("On time");
  } else if (examTimeInMin > arrTimeMin) {
    if (diff <= 30) {
      console.log("On time");
      console.log(`${minutes} minutes before the start`);
    } else if (diff > 30 && diff < 60) {
      console.log("Early");
      if (minutes >= 10) {
        console.log(`${minutes} minutes before the start`);
      } else {
        console.log(`0${minutes} minutes before the start`);
      }
    } else if (diff > 59) {
      console.log("Early");
      if (minutes >= 10) {
        console.log(`${hours}:${minutes} hours before the start`);
      } else {
        console.log(`${hours}:0${minutes} hours before the start`);
      }
    }
  } else if (examTimeInMin < arrTimeMin) {
    console.log("Late");
    if (diff < 60) {
      console.log(`${minutes} minutes after the start`);
    } else {
      if (minutes >= 10) {
        console.log(`${hours}:${minutes} hours after the start`);
      } else {
        console.log(`${hours}:0${minutes} hours after the start`);
      }
    }
  }
}

examTime(["9", "30", "9", "50"]);
