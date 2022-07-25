function addItem() {
  console.log("TODO:...");

  const inpText = document.getElementById("newItemText").value;
  const newLi = document.createElement("li");
  newLi.textContent = inpText;
  document.getElementById("items").appendChild(newLi);
}
