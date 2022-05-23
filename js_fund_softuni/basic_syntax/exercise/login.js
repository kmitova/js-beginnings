function checkPassword(input) {
  let name = input[0]
  let counter = 1
  let correctPass = name.split("").reverse().join("")

  index = 1
  while (counter <= 3) {
    let attempt = input[index]
    if (attempt == correctPass) {
      console.log(`User ${name} logged in.`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
    index++
    counter += 1
  }

  if (counter == 4) {
    console.log(`User ${name} blocked!`)
  }
}

checkPassword(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
