function solve() {
  let input = document.getElementById("text").value;
  const currentCase = document.getElementById("naming-convention").value;

  input = input.toLowerCase();
  let result = input[0];

  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === " ") {
      result += input[i].toUpperCase();
    } else if (input[i] != " ") {
      result += input[i];
    }
  }
  if (currentCase === "Camel Case") {
    document.getElementById("result").textContent = result;
  } else if (currentCase === "Pascal Case") {
    const resultPascal = result.charAt(0).toUpperCase() + result.slice(1);
    document.getElementById("result").textContent = resultPascal;
  } else {
    document.getElementById("result").textContent = "Error!";
  }
}
