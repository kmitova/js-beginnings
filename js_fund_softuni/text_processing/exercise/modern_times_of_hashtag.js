function solve(string) {
  string = string.split(' ')
  for (let el of string) {
    if (el.startsWith('#') && el.length > 1) {
      let asciiCode = el.charCodeAt(1)
      let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
      if (isLetter) {
        console.log(el.substring(1))
      }
    }
  }
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);