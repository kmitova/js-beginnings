function expenses(input) {
  let fee = Number(input[0]);
  let sneakers = fee * 0.6;
  let clothes = sneakers * 0.8;
  let ball = clothes * 0.25;
  let accessories = ball * 0.2;
  let total = fee + sneakers + clothes + ball + accessories;
  console.log(total);
}

expenses(["365"]);