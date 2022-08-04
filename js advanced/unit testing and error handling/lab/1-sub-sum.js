function solve(numbers, start, end) {
  if (!Array.isArray(numbers)) {
    return NaN;
  }

  if (start < 0) {
    start = 0;
  }

  if (end >= numbers.length) {
    end = numbers.length - 1;
  }

  let subNumbers = numbers.slice(start, end + 1);

  let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
  return sum;
}

solve([10, 20, 30, 40, 50, 60], 3, 300);
