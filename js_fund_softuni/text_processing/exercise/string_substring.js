function solve(word, text) {
  text = text.toLowerCase()
  text = text.split(' ')
  let found = false
  for (const el of text) {
    if (el === word) {
      console.log(word)
      found = true
    }
    if (found) {
      break
    }
  }
  if (!found) {
    console.log(`${word} not found!`)
  }
}

solve("python", "JavaScript is the best programming language");