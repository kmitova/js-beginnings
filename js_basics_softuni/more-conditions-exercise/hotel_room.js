function hotelPrice(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let studioPrice = 0;
  let apPrice = 0;

  if (month === "May" || month === "October") {
    studioPrice = nights * 50;
    apPrice = nights * 65;
  } else if (month === "June" || month === "September") {
    studioPrice = nights * 75.2;
    apPrice = nights * 68.7;
  } else if (month === "July" || month === "August") {
    studioPrice = nights * 76;
    apPrice = nights * 77;
  }

  if (nights > 7 && nights <= 14 && (month === "May" || month === "October")) {
    studioPrice -= studioPrice * 0.05;
  } else if (nights > 14 && (month === "May" || month === "October")) {
    studioPrice -= studioPrice * 0.3;
  } else if (nights > 14 && (month === "June" || month === "September")) {
    studioPrice -= studioPrice * 0.2;
  }
  if (nights > 14) {
    apPrice -= apPrice * 0.1;
  }

  console.log(`Apartment: ${apPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelPrice(["August", "20"]);
