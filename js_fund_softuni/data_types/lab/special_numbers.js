function solve(n) {
  for (let i = 1; i <= n; i++) {
    let iStr = i.toString()
    let sum = 0
    for (let j of iStr) {
      sum += parseInt(j)
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`)
    } else {
      console.log(`${i} -> False`);
    }
  }
}

solve(15)