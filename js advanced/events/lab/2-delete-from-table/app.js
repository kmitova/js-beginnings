function deleteByEmail() {
  console.log("TODO:...");
  const email = document.querySelector("input").value;
  const rows = Array.from(document.querySelectorAll("tr"));
  const tableElement = document.getElementById("customers");
  let found = false;
  rows.forEach((row) => {
    const rowChildren = row.children;
    const emailText = rowChildren[1].textContent;
    if (emailText === email) {
      tableElement.remove(row);
      found = true;
    }
  });

  if (found) {
    document.getElementById("result").textContent = "Deleted";
  } else {
    document.getElementById("result").textContent = "Not found.";
  }
}
