function solve() {
  let inputText = document.querySelector("textarea").value;
  let outputArea = document.getElementById("output");
  let sentences = inputText
    .split(".")
    .filter((sentence) => sentence.length != 0);
  while (sentences.length > 0) {
    let text = sentences.splice(0, 3).join(". ") + ".";
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    outputArea.appendChild(paragraph);
  }
}
