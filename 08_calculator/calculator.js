const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total+item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total*item, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	fact = 1
  for (i=1; i<num+1; i++) {
    fact*=i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
