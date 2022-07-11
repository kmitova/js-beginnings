function solve(steps, footprint, speed) {
  let distanceMeters = steps * footprint
  let speedMeterSec = speed / 3.6
  let time = distanceMeters / speedMeterSec
  let rest = Math.floor(distanceMeters / 500)

  let timeMin = Math.floor(time / 60)
  let timeSec = Math.round(time - (timeMin*60))
  let timeHours = Math.floor(time / 3600)

  console.log((timeHours < 10 ? '0' : '') + timeHours
  + ':' + (timeMin + rest < 10 ? '0' : '') + (timeMin+rest) + ':' + (timeSec < 10 ? '0' : '' + timeSec))
}

solve(2564, 0.7, 5.5);