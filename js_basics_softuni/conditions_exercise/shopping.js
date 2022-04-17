function shopping(input) {
  let budget = Number(input[0]);
  let cards = Number(input[1]);
  let processors = Number(input[2]);
  let memories = Number(input[3]);

  let cardPrice = 250;

  let cardsSum = cards * cardPrice;
  let processorSum = processors * cardsSum * 0.35;
  let memorySum = cardsSum * 0.1 * memories;

  let total = cardsSum + memorySum + processorSum;

  if (cards > processors) {
    let discount = total * 0.15;
    total -= discount;
  }

  if (total <= budget) {
    let moneyLeft = budget - total;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${(total - budget).toFixed(2)} leva more!`
    );
  }
}

shopping(["900", "2", "1", "3"]);
