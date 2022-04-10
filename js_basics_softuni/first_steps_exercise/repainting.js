function repainting(input) {
  let plasticPriceM = 1.5;
  let paintPriceL = 14.5;
  let thinnerPriceL = 5;
  let plasticNeeded = Number(input[0]);
  let paintLNeeded = Number(input[1]);
  let thinnerLNeeded = Number(input[2]);
  let hours = Number(input[3]);
  let bags = 0.4;

  let plasticPrice = (plasticNeeded + 2) * plasticPriceM;
  let paintPrice = (paintLNeeded + paintLNeeded * 0.1) * paintPriceL;
  let thinnerPrice = thinnerPriceL * thinnerLNeeded;
  let totalMaterials = plasticPrice + paintPrice + thinnerPrice + bags;
  let work = totalMaterials * 0.3 * hours;
  let total = totalMaterials + work
  console.log(total)
}

repainting(["10 ", "11 ", "4 ", "8 "])