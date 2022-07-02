function solve(string) {
  let words = [];
  let currentWord = string[0];
  for (let index = 1; index < string.length; index++) {
    if (string[index].toUpperCase() !== string[index]) {
      currentWord = currentWord.concat(string[index]);
    } else {
      words.push(currentWord);
      currentWord = string[index];
    }
  }
  words.push(currentWord);
  console.log(words.join(", "));
}

solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
