function solve(input) {
  let book = {}
  for (let line of input) {
    let info = line.split(':')
    let name = info[0]
    let address = info[1]
    book[name] = address
  }

  let sorted = Object.entries(book)
  sorted.sort((a, b) => a[0].localeCompare(b[0]))

  for (let key in sorted) {
    console.log(`${sorted[key][0]} -> ${sorted[key][1]}`);
  }
}

solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);