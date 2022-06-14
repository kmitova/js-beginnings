function solve(input) {
  let heroesArray = []
  class Hero {
    constructor (name, level, items) {
      this.name = name
      this.level = level
      this.items = items
    }
  }

  for (let info of input) {
    info = info.split(' / ')
    let name = info[0]
    let level = Number(info[1])
    if (info[2]) {
      let items = info[2]
      heroesArray.push (new Hero(name, level, items))
    } else {
      heroesArray.push(new Hero(name, level));
    }
    
    
  }
  heroesArray.sort((a, b) => a.level - b.level)
  for (let hero of heroesArray) {
    console.log(`Hero: ${hero.name}`)
    console.log(`level => ${hero.level}`)
    if (hero.items) {
      console.log(`items => ${hero.items}`)
    }
  }
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);