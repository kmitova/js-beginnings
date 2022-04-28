function titlePerson(input) {
  let age = Number(input[0]);
  let sex = input[1];
  let title;
  if (sex === "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  }
}

titlePerson(["12", "f"]);
