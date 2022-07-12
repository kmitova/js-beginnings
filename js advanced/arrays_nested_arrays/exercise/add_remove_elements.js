function solve(commands) {
  const result = [];
  let num = 0;
  for (const command of commands) {
    num++;
    if (command == "add") {
      result.push(num);
    } else {
      result.pop();
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}

solve(["add", "add", "remove", "add", "add"]);
