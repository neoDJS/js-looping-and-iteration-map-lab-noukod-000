// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
  drivers.map(d => return {firstName: d.split(" ").first, lastName: d.split(" ").last})
}
