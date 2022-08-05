function validate() {
  const email = document.getElementById("email");
  const emailRegex = new RegExp("^[a-z]+@[a-z]+\\.[a-z]+");

  email.addEventListener("change", () => {
    if (emailRegex.test(email.value)) {
      email.classList.remove("error");
    } else {
      email.classList.add("error");
    }
  });
}
