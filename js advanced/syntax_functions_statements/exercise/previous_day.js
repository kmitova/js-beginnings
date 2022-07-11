function solve(y, m, d) {
  const previous = new Date(`${y}-${m}-${d}`);
  previous.setDate(previous.getDate() - 1);
  const year = previous.getFullYear();
  const month = previous.getMonth() + 1;
  const day = previous.getDate();

  const withHyphens = [year, month, day].join("-");
  console.log(withHyphens);
}

solve(2016, 10, 1);
