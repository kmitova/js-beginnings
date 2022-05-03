function accountBalance(input) {
  let data = input[0];
  let index = 0;
  let total = 0;
  while (data !== "NoMoreMoney") {
    data = Number(data);
    index++;
    if (data < 0) {
      console.log("Invalid operation!");
      break;
    } else {
      total += data;
      console.log(`Increase: ${data.toFixed(2)}`);
    }
    data = input[index];
  }
  console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance(["120", "45.55", "-150"]);

