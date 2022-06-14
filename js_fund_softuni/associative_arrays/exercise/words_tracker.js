function solve(input) {
  let words = {}
  let searchedWords = input.shift()
  searchedWords = searchedWords.split(' ')
  for (let word of searchedWords) {
    words[word] = 0
  }
  for (let el of input) {
    if (words.hasOwnProperty(el)) {
      words[el] += 1
    }
  }
  let sorted = Object.entries(words)
  sorted.sort((a, b) => b[1] - a[1])
  for (let [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);