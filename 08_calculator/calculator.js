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
    console.log(parseInt(args[i]));
  }
  return sum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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