function solve(arr) {
  arr.sort(criteria);
  return arr.join("\n");
  function criteria(current, next) {
    if (current.length === next.length) {
      return current.localeCompare(next);
    }
    return current.length - next.length;
  }
}
