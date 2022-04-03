// document.getElementById("count-el").innerText = 5


// creating a variable
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// printing a variable
// console.log(count)


// let myAge = 23
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAgelet count = 5


// let count = 5
// let not needed for reassignment
// count = count + 1  
// count = count - 2
// console.log(count)


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints += 50
// console.log(bonusPoints)

// bonusPoints -= 75
// console.log(bonusPoints)

// bonusPoints += 45
// console.log(bonusPoints)

// pseudo code
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

// function increment() {
//   console.log("The button was clicked")
// }

// function countdown() {
//   console.log(3)
//   console.log(2)
//   console.log(1)
// }
// countdown()

// function number() {
//   console.log(42)
// }
// number()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function time() {
//   let total = lap1 + lap2 + lap3
//   console.log(total)
// }
// time()

// let lapsCompleted = 0
// function incrementer() {
//   lapsCompleted += 1
// }
// incrementer()
// incrementer()
// incrementer()
// console.log(lapsCompleted)


// pseudo code
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
function increment() {
    count = count + 1
    countEl.textContent = count
}
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countDash = count + " - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  saveEl.textContent += countDash
  countEl.textContent = 0
  count = 0
}

