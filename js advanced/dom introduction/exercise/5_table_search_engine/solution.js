function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  function onClick() {
    let input = document.getElementById("searchField").value;
    document.getElementById("searchField").value = "";
    const rows = Array.from(document.querySelectorAll("tr"));
    rows.forEach((row) => {
      if (row.classList.contains("select")) {
        row.classList.remove("select");
      }
    });

    input = input.toLowerCase();
    const items = Array.from(document.querySelectorAll("td"));
    console.log(items);
    items.forEach((item) => {
      let text = item.textContent.toLowerCase();
      if (text.includes(input)) {
        item.parentElement.classList.add("select");
      }
    });
  }
}
