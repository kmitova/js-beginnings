function solve(string, n) {
  result = ''
  for (let i = 0; i < n; i++) {
    result += string
  }
  return result
}

console.log(solve('abc', 3))