function ticketSales(day, age) {
  let price = 0
  let wrongInfo = false

  if (day == "Weekday") {
    if (age >= 0  &&  age <= 18) {
      price = 12
    } else if (18 < age <= 64) {
      price = 18
    } else if (64 < age <= 122) {
      price = 12
    } else {
      wrongInfo = true
    }
  } else if (day == "Weekend") {
    if (0 <= age <= 18) {
      price = 15;
    } else if (18 < age <= 64) {
      price = 20;
    } else if (64 < age <= 122) {
      price = 15;
    } else {
      wrongInfo = true
    }
  } else if (day == "Holiday") {
    if  (age >= 0 && age <= 18) {
      price = 5;
    } else if (18 < age <= 64) {
      price = 12;
    } else if (64 < age <= 122) {
      price = 10;
    } else {
      wrongInfo = true;
    }
  } else {
    wrongInfo = true
  }

  if (wrongInfo) {
    console.log("Error!")
  } else {
    console.log(`${price}$`)
  }
}

ticketSales("Holiday", 15);