function objectConverter(object) {
  let person = JSON.parse(object);
  for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}

objectConverter('{"name": "George", "age": 40, "town": "Sofia"}');
