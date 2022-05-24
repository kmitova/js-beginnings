function solve(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        let l1 = String.fromCharCode(97+i)
        let l2 = String.fromCharCode(97 + j);
        let l3 = String.fromCharCode(97 + k);
        console.log(`${l1}${l2}${l3}`)

      }
    }
    
  }
}

solve(2)