function addItem() {
  const inpText = document.getElementById("newItemText").value;

  if (inpText.length === 0) return;
  const newLi = document.createElement("li");
  newLi.textContent = inpText;
  const deleteLink = document.createElement("a");
  const linkText = document.createTextNode("[Delete]");
  deleteLink.href = "#";

  deleteLink.appendChild(linkText);
  deleteLink.addEventListener("click", deleteItem);
  newLi.appendChild(deleteLink);

  newLi.appendChild(deleteLink);
  document.getElementById("items").appendChild(newLi);

  function deleteItem() {
    newLi.remove();
  }
}
