function sorting(array) {
  array = array.sort((a, b) => a.length - b.length);
  for (let el of array) {
    console.log(el);
  }
}

sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
