function solve(string, templates) {
  string = string.split(", ");
  let templatesArr = templates.split(' ')
  for (const word of string) {
    templates = templates.replace('*'.repeat(word.length), word)
  }
  console.log(templates);
}

solve("great", "softuni is ***** place for learning new programming languages");
