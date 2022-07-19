function toggle() {
  const button = document.querySelector(".button");
  const content = document.querySelector("#extra");
  console.log(button.textContent);
  let btnText = button.textContent;
  console.log(btnText);
  if (btnText === "More") {
    console.log(content);
    content.style.display = "block";
    button.textContent = "Less";
  } else if (btnText === "Less") {
    content.style.display = "none";
    button.textContent = "More";
  }
}
