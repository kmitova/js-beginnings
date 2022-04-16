function areaOfFigures(input) {
  let figure = input[0]
  let area = 0
  if (figure === "square") {
    let side = Number(input[1])
    area = side * side
  } else if (figure === "rectangle") {
    let side1 = Number(input[1])
    let side2 = Number(input[2])
    area = side1 * side2
  } else if (figure === "circle") {
    let r = Number(input[1])
    area = r**2*Math.PI
  } else {
    let side = Number(input[1])
    let height = Number(input[2])
    area = (side * height) / 2
  }

  console.log(area.toFixed(3))
}

areaOfFigures(["circle", "6"])