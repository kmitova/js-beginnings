function solve(input) {
  let neighborhood = input[0].split("@").map(Number)
  // console.log(neighborhood)
  let start = 0
  let index = 1
  let command = input[index]
  let house
  while (command !== "Love") {
    let current = command.split(' ')
    let len = Number(current[1])
    house = start + len

    if (house >= neighborhood.length) {
      house = 0
    }
    if (neighborhood[house] === 0) {
      console.log(`Place ${house} already had Valentine's day.`);
    } else {
      neighborhood[house] -= 2
      if (neighborhood[house] === 0) {
        console.log(`Place ${house} has Valentine's day.`);
      }
    }
    start = house
    index += 1
    command = input[index]
  }
  console.log(`Cupid's last position was ${house}.`);
  let leftHouses = []
  for (let el of neighborhood) {
    if (el !== 0) {
      leftHouses.push(el)
    }
  }
  if (leftHouses.length > 0) {
    console.log(`Cupid has failed ${leftHouses.length} places.`);
  } else {
    console.log("Mission was successful.");
  }
}

solve(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);