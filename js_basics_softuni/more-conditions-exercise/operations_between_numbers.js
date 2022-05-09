function numbers(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operator = input[2];
  let even_odd = 0;
  let result = 0;

  if (n2 === 0) {
    console.log(`Cannot divide ${n1} by zero`);
  } else if (operator === "+") {
    result = n1 + n2;
    if (result % 2 === 0) {
      console.log(`${n1} + ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} + ${n2} = ${result} - odd`);
    }
  } else if (operator === "-") {
    result = n1 - n2;
    if (result % 2 === 0) {
      console.log(`${n1} - ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} - ${n2} = ${result} - odd`);
    }
  } else if (operator === "*") {
    result = n1 * n2;
    if (result % 2 === 0) {
      console.log(`${n1} * ${n2} = ${result} - even`);
    } else {
      console.log(`${n1} * ${n2} = ${result} - odd`);
    }
  } else if (operator === "/") {
    result = n1 / n2;

    console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
  } else if (operator === "%") {
    result = n1 % n2;

    console.log(`${n1} % ${n2} = ${result}`);
  }
}

numbers(["10", "12", "+"]);
