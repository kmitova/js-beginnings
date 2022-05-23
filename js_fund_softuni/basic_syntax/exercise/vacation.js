function vacationPrice(group, type, day) {
  group = Number(group)
  let price = 0
  let total = 0

  if (type == "Students") {
    if (day == "Friday") {
      price = 8.45
    } else if (day == "Saturday") {
      price = 9.8
    } else if (day == "Sunday") {
      price = 10.46
    }
  } else if (type == "Business") {
    if (day == "Friday") {
      price = 10.9;
    } else if (day == "Saturday") {
      price = 15.6;
    } else if (day == "Sunday") {
      price = 16;
    }
  } else if (type == "Regular") {
    if (day == "Friday") {
      price = 15;
    } else if (day == "Saturday") {
      price = 20;
    } else if (day == "Sunday") {
      price = 22.5;
    }
  }

  total = price * group

  if (type == "Students" && group >= 30) {
    total -= total * 0.15
  }
  if (type == "Business" && group >= 100) {
    total -= price * 10
  }
  if (type == "Regular" && group >= 10 && group <= 20) {
    total -= total * 0.05
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

vacationPrice(40, "Regular", "Saturday");
