function solve(text) {
  let half = Math.ceil(text.length / 2);
  let half1 = text.substring(0, half);
  let half2 = text.substring(half);

  half1 = half1.split("");
  let revHalf1 = half1.reverse();
  console.log(revHalf1.join(""));
  half2 = half2.split("");
  let revHalf2 = half2.reverse();
  console.log(revHalf2.join(""));
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
