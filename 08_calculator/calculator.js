const add = function() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    }
  return sum;
};

const subtract = function() {
  let difference = Math.abs(arguments[0] - arguments[1]);
  return difference;
};

const sum = function() {
  let sum = 0,
    args = arguments[0];
  for (i = 0; i < args.length; i++) {
    sum += parseInt(args[i]);
  }
  return sum;
};

const multiply = function() {
  let product = 1,
    args = arguments[0];
  for (i = 0; i < args.length; i++) {
    product *= parseInt(args[i]);
  }
  return product;
};

const power = function() {
  let power = arguments[0] ** arguments[1];
  return power;
};

const factorial = function() {
	let base = arguments[0],
    factor = 1;
  for (i = 1; i <= base; i++) {
    factor *= i;
  }
  return factor;
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