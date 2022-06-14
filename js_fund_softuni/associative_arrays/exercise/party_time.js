function solve(input) {
  let vips = new Set()
  let regulars = new Set()

  while (input[0] !== 'PARTY') {
    let guest = input.shift()
    if (Number.isNaN(Number(guest[0]))) {
      regulars.add(guest)
    } else {
      vips.add(guest)
    }
  }
  for (let guest of input) {
    vips.delete(guest)
    regulars.delete(guest)
  }
  console.log(vips.size + regulars.size)
  for (let el of vips) {
    console.log(el)
  }
    for (let el of regulars) {
      console.log(el);
    }
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);