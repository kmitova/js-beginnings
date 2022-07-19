function extractText() {
  const listItems = Array.from(document.getElementsByTagName("li"));
  const teaxtArea = document.getElementById("result");
  listItems.forEach((item) => (teaxtArea.value += item.textContent + "\n"));
}
