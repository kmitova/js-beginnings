function solve(text, word) {
  let words = text.split(" ");
  let count = 0;

  for (let el of words) {
    if (el === word) {
      count += 1;
    }
  }

  console.log(count);
}

solve("This is a word and it also is a sentence", "is");
