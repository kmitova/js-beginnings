function search() {
  let matches = 0;
  const resultField = document.getElementById("result");
  const items = Array.from(document.querySelectorAll("li"));
  const searchFiled = document.getElementById("searchText");
  let input = document.getElementById("searchText").value;
  if (input != "") {
    items.forEach((item) => {
      if (item.textContent.startsWith(input)) {
        item.style.fontWeight = "bold";
        item.style.textDecoration = "underline";
        searchFiled.value = "";
        matches++;
      }
    });
  }
  resultField.textContent = `${matches} matches found`;
}
