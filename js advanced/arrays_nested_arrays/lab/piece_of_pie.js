function solve(pies, start, end) {
  const startInd = pies.indexOf(start);
  const endInd = pies.indexOf(end) + 1;

  return pies.slice(startInd, endInd);
}
