function validNumschecker(input) {
  let number = Number(input[0])

  if (number > 200 || number < 100) {
    if (number !== 0) {
      console.log("invalid")
    }
  }
}
validNumschecker(["199"])
