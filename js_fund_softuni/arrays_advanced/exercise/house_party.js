function guestTracker(arr) {
  let guests = [];
  for (let command of arr) {
    currentCommand = command.split(" ");
    // console.log(currentCommand)
    let name = currentCommand[0];
    if (currentCommand.includes("not")) {
      // console.log('in list')
      if (guests.includes(name)) {
        guests.splice(name.indexOf(), 1);
        // console.log(guests)
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (!guests.includes(name)) {
        guests.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    }
  }
  console.log(guests.join("\n"));
}

guestTracker([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
