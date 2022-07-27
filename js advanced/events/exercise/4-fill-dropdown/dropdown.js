function addItem() {
  console.log("TODO:...");
  const addBtn = document.querySelector("input[type=button]");
  console.log(addBtn);

  createOption();
  function createOption() {
    const text = document.getElementById("newItemText").value;
    const value = document.getElementById("newItemValue").value;
    let option = document.createElement("option");
    option.textContent = text;
    console.log(option.textContent);
    option.value = value;
    document.getElementById("menu").appendChild(option);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
  }
}
