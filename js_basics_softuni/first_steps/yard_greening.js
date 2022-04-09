function calculateSum(input) {
  let area = Number(input[0]);
  let total = area * 7.61;
  let discount = total * 0.18;
  total -= discount;
  console.log(`The final price is: ${total} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

calculateSum(["550"]);