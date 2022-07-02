function solve(path) {
  path = path.split("\\");
  let data = path[path.length - 1];
  data = data.split(".");
  if (data.length === 2) {
    console.log("File name: " + data[0]);
    console.log("File extension: " + data[1]);
  } else {
    let extension = data[data.length - 1];
    data.pop();
    let name = data.join(".");
    console.log("File name: " + name);
    console.log("File extension: " + extension);
  }
}

solve("C:\\Internal\\training-internal\\Template.pack.pptx");
