function bookFinder(input) {
  let name = input[0];
  let count = 0;
  let isBookFound = false;
  let index = 1;
  let currentBook = input[index];

  while (currentBook !== "No More Books") {
    if (currentBook === name) {
      isBookFound = true;
      console.log(`You checked ${count} books and found it.`);
      break;
    }
    count += 1;
    index++;
    currentBook = input[index];
  }

  if (isBookFound === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${count} books.`);
  }
}

bookFinder([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
