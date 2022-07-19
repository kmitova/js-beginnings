function colorize() {
  const rows = Array.from(document.querySelectorAll("table tr"));
  let index = 0;
  rows.forEach((row) => {
    index++;
    if (index % 2 == 0) {
      row.style.background = "teal";
    }
  });
}
