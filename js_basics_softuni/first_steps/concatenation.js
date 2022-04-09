function concatenateData(input) {
  let name = input[0];
  let lastNmae = input[1];
  let age = String(input[2]);
  let city = input[3];
  console.log(`You are ${name} ${lastNmae}, a ${age}-years old person from ${city}.`);
}

concatenateData(["Maria", "Ivanova", 20, "Sofia"])