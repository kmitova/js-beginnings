function swimmming(input) {
  let currentRecord = Number(input[0]);
  let meters = Number(input[1]);
  let timePerM = Number(input[2]);

  let time = meters * timePerM;
  let timeDelay = Math.floor(meters / 15) * 12.5;
  let total = time + timeDelay;

  if (total < currentRecord) {
    console.log(`Yes, he succeeded! The new world record is ${total.toFixed(2)} seconds.`);
  } else {
    console.log(`No, he failed! He was ${Math.abs(
      currentRecord - total
    ).toFixed(2)} seconds slower.`);
  }
}

swimmming(["10464", "1500", "20"]);
