function solve(input) {
  let employees = {};
  for (let el of input) {
    employees.name = el;
    employees.number = el.length;
    console.log(
      `Name: ${employees.name} -- Personal Number: ${employees.number}`
    );
  }
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
