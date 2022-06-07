function solve(numbers, commands) {
  for (let command of commands) {
    command = command.split(' ')
    let action = command[0]
    if (action === "add") {
      let index = Number(command[1])
      let element = Number(command[2])
      numbers.splice(index, 0, element)
    } else if (action == 'addMany') {
      let index = Number(command[1]);
      let elements = []
      for (let i = 2; i < command.length; i++) {
        // console.log(command[i])
        elements.push(Number(command[i]))
        // console.log(elements)
      }
      console.log(elements)
      // let elements = command[2].split(' ').map(Number)
      for (let i = 0; i < index; i++) {
        let ind = 0 + index
        console.log(ind)
        console.log(elements[i])
        numbers.splice(ind, 0, elements[i]);
        ind += 1
      }
    } else if (action == 'contains') {
      let element = Number(command[1])
      if (numbers.includes(element)) {
        console.log(numbers.indexOf(element))
      } else {
        console.log('-1')
      }
    }
    else if (action === "remove"){
      let index = Number(command[1])
      numbers.splice(index, 1)
    } 
  }
  console.log(numbers)
}

solve(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
