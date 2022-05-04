function cake(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let allPieces = width * length;
  let left = 0;
  let noMoreLeft = false;

  let command = input[2];
  let index = 2;
  while (command !== "STOP") {
    index++;
    let slicesNumber = Number(command);
    allPieces -= slicesNumber;
    if (allPieces < 0) {
      noMoreLeft = true;
      break;
    }
    command = input[index];
  }

  if (noMoreLeft) {
    console.log(
      `No more cake left! You need ${Math.abs(allPieces)} pieces more.`
    );
  } else {
    console.log(`${allPieces} pieces are left.`);
  }
}
