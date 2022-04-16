function passwordCheck(input) {
  let text = input[0]
  let password = "s3cr3t!P@ssw0rd"
  if (text === password) {
    console.log("Welcome")
  } else {
    console.log("Wrong password!")
  }
}

passwordCheck(["qwerty"])