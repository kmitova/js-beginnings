function solve(input) {
  let products = new Map()
  for (let el of input) {
    let info = el.split(' ')
    let product = info[0]
    let quantity = Number(info[1])
    if (!products.has(product)) {
      products.set(product, quantity)
    } else {
      let currQuantity = products.get(product)
      let newQuantity = currQuantity += quantity
      products.set(product, newQuantity)
    }
    
  }

  for (let el of products) {
    console.log(`${el[0]} -> ${el[1]}`)
  }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);