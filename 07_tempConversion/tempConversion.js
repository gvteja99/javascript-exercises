const ftoc = function(tempInFahrenheit) {
  return +((tempInFahrenheit-32)*5/9).toFixed(1)
};

const ctof = function(tempInCelcius) {
  return +((tempInCelcius * 9/5) + 32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
