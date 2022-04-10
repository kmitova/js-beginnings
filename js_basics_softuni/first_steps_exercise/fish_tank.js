function waterNeeded(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let volume = length * width * height;
  let volumeL = volume * 0.001;
  let space = Number(input[3]);
  let liters = volumeL * (1 - space / 100);
  console.log(liters);
}

waterNeeded(["85", "75", "47", "17"])