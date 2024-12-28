const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentValue) => (total + currentValue), 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentValue) => (total * currentValue), 1)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if (num === 0)
    return 1;

  let i, product = 1;
  for (i=1; i<=num; i++) {
    product *= i;
  }

  return product;
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
