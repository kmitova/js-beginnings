function textReader(input) {
  let index = 0;
  let string = input[index];
  
  while (string !== "Stop") {
    console.log(input[index]);
    index++;
    string = input[index];
  }
}

textReader([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
