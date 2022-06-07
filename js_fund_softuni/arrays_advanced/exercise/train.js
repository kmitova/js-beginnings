function solve(wagons) {
  let passengers = wagons.shift().split(" ").map(Number);
  let capacity = Number(wagons.shift());

  for (let command of wagons) {
    let currentCommand = command.split(" ");
    if (currentCommand[0] == "Add") {
      passengers.push(Number(currentCommand[1]));
    } else {
      for (let i = 0; i < passengers.length; i++) {
        if (passengers[i] + Number(currentCommand[0]) <= capacity) {
          passengers[i] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(passengers.join(' '));
}

solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
