function solve(input) {
  let products = []
  for (let el of input) {
    // console.log(el)
    let info = el.split(' : ')
    let productName = info[0]
    let productPrice = Number(info[1])
    products.push({ name: productName, price: productPrice})
  }
  products.sort((a, b) => (a.name > b.name ? 1 : -1));
  for (let el of products) {
    console.log(el)
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);