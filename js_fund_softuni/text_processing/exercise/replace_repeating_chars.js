function solve(string) {
  let unique = "";
  for (let index = 0; index < string.length; index++) {
    let currChar = string.charAt(index);
    let nextChar = string.charAt(index + 1);
    if (currChar !== nextChar) {
      unique += currChar;
    }
  }
  console.log(unique);
}

solve("aaaaabbbbbcdddeeeedssaa");
