function coinsCounter(input) {
  let sum = Number(input[0])
  sum = Math.floor(sum * 100)
  let coinsCounter = 0

  coinsCounter += Math.floor(sum / 200)
  sum %= 200
  coinsCounter += Math.floor(sum / 100);
  sum %= 100;
  coinsCounter += Math.floor(sum / 50);
  sum %= 50;
  coinsCounter += Math.floor(sum / 20);
  sum %= 20;
  coinsCounter += Math.floor(sum / 10);
  sum %= 10;
  coinsCounter += Math.floor(sum / 5);
  sum %= 5;
  coinsCounter += Math.floor(sum / 2);
  sum %= 2;
  coinsCounter += Math.floor(sum / 1);
  sum %= 1;

  console.log(coinsCounter)
}

coinsCounter(["1.23"]);