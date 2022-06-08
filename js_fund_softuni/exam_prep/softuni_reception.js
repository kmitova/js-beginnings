function solve(input) {
  let totalEmployees = 3
  let emp1AbilityHour = Number(input[0])
  let emp2AbilityHour = Number(input[1]);
  let emp3AbilityHour = Number(input[2]);
  let studentsCount = Number(input[3])

  let totalAbilityPerHour = emp1AbilityHour + emp2AbilityHour + emp3AbilityHour

  let time = 0
  let rest = 0
  let requestsAnswered = 0
  let currentTime = 0

  for (let student = 1; student <= studentsCount; student++) {
    if (totalAbilityPerHour <= 0) {
      time += 1
      totalAbilityPerHour = (emp1AbilityHour + emp2AbilityHour + emp3AbilityHour)
    }
    totalAbilityPerHour -= 1
    requestsAnswered += 1

    if (time % 3 === 0 && !(time === 0) && !(time === currentTime)) {
      currentTime = time
      rest += 1
    }
  }
  if (studentsCount === 0) {
    console.log(`Time needed: ${0 + rest}h.`)
  } else {
    console.log(`Time needed: ${1 + time + rest}h.`);
  }
}

solve(["1", "2", "3", "45"]);