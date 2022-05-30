function solve(arr) {
  let health = 100
  let coins = 0
  data = arr[0].split('|')
  console.log(data)
  let questOver = false
  let rooms = 1

  for (let pair of data) {
    pair = pair.toString()
    pair = pair.split(' ')
    item = pair[0]
    num = Number(pair[1])

    if (item === "potion") {
      
      if (health + num > 100) {
        diff = 100 - num
        health = 100
        console.log(`You healed for ${diff} hp.`)
      } else {
        health += num
        console.log(`You healed for ${num} hp.`);
      }
      console.log(`Current health: ${health} hp.`);
      
    } else if ( item === "chest") {
      coins += num
      console.log(`You found ${num} coins.`)
    } else {
      monster = item
      health -= num
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);
        questOver = true
        break
      }
    }
    rooms += 1
  }

  if (questOver) {
    console.log(`Best room: ${rooms}`)
  } else {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`)

  }
}


solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);