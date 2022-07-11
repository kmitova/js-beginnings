function solve(speed, area) {
  let status
  let inLimit = false
  let speedLimit
  if (area === 'motorway')  {
    speedLimit = 130
    if (speed <= 130) {
      inLimit = true
    } else {
      difference = speed - 130;
      if (speed - 130 <= 20) {
        status = 'speeding'
      } else if (speed - 130 <= 40 ) {
        status = 'excessive speeding'
      } else {
        status = 'reckless driving'
      }
    }
  } 

  if (inLimit) {
    console.log(`Driving ${speed} km/h in a {speed limit} zone`);
  } else {
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
  }
}

// solve(40, "city");
// solve(21, "residential");
// solve(120, "interstate");
solve(200, "motorway");
