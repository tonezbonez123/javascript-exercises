const ftoc = function(farenheit) {
  let celcius = (farenheit - 32) * (5/9);
  let rounded = Math.round(celcius * 10)/10
  return rounded;
};

const ctof = function(celcius) {
  let farenheit = (celcius * (9/5) + 32);
  let rounded = Math.round(farenheit * 10)/10
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
