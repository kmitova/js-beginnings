function deliveryPrice(input) {
  let chickenMenus = Number(input[0]);
  let fishMenus = Number(input[1]);
  let vegMenus = Number(input[2]);
  let chicken = chickenMenus * 10.35;
  let fish = fishMenus * 12.4;
  let veg = vegMenus * 8.15;
  let total = chicken + fish + veg;
  total = total + total * 0.2;
  total = total + 2.5;
  console.log(total)
}

deliveryPrice(["2", "4", "3"]);