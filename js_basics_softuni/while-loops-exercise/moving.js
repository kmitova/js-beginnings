function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let volume = width * length * height;
  let thereIsSpace = true;
  let command = input[3];
  let index = 3;

  while (command !== "Done") {
    let numberOfBoxes = Number(command);
    volume -= numberOfBoxes;
    if (volume < 0) {
      thereIsSpace = false;
      break;
    }
    index++;
    command = input[index];
  }

  if (thereIsSpace) {
    console.log(`${volume} Cubic meters left.`);
  } else {
    console.log(
      `No more free space! You need ${Math.abs(volume)} Cubic meters more.`
    );
  }
}
