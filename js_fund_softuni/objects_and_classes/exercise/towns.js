function solve(input) {
  let finalResult = {};
  for (const tokens of input) {
    let [town, latitude, longitude] = tokens.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    finalResult.town = town;
    finalResult.latitude = latitude;
    finalResult.longitude = longitude;
    console.log(finalResult);
  }
}

solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
