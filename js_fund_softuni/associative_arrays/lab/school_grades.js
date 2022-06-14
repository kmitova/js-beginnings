function solve(input) {
  let students = new Map();
  for (let el of input) {
    let tokens = el.split(' ')
    let name = tokens.shift()
    let grades = tokens.map(Number)

    if (!students.has(name)) {
      students.set(name, [])
    }
    let existing = students.get(name)
    for (let grade of grades) {
      existing.push(grade)
    }
  }
  let sorted = Array.from(students)
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, grades] of sorted) {
    let average = 0
    for (let grade of grades) {
      average += grade
    }
    average /= grades.length
    console.log(`${name}: ${average.toFixed(2)}`)
  }
}

solve(["Steven 3", "George 4 6", "Tammy 2 5 3", "Steven 6"]);
