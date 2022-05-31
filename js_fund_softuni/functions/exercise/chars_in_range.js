function solve(ch1, ch2) {
  ch1 = ch1.charCodeAt()
  ch2 = ch2.charCodeAt();
  characters = []
  for (let char = ch1+1; char < ch2; char++) {
    characters.push(String.fromCodePoint(char))
  }
  return characters.join(' ')
}

console.log(solve("C", "#"));